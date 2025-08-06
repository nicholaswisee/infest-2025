"use client";
import { create } from 'zustand';
import { createClient } from '@/utils/supabase/client';
import { UserStore } from '@/types';

const supabase = createClient();

export const useUserStore = create<UserStore>((set, get) => ({
  user: null,
  userProfile: null,
  isLoading: true,
  error: null,
  isInitialized: false,
  
  setUser: (user) => set({ user }),
  setUserProfile: (userProfile) => set({ userProfile }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  setInitialized: (isInitialized) => set({ isInitialized }),
  

  fetchUserData: async () => {
    try {
      // Only set loading if we're not already initialized
      const { isInitialized } = get();
      if (!isInitialized) {
        set({ isLoading: true, error: null });
      }

      const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();
      
      if (authError) {
        throw new Error(authError.message);
      }

      if (!authUser) {
        set({ 
          user: null, 
          userProfile: null, 
          isLoading: false,
          isInitialized: true 
        });
        return;
      }

      const response = await fetch('/api/user/', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          set({ 
            user: null, 
            userProfile: null, 
            isLoading: false,
            isInitialized: true 
          });
          return;
        }
        throw new Error('Failed to fetch user profile');
      }

      const data = await response.json();
      
      set({ 
        user: data.authUser,
        userProfile: data.userProfile,
        isLoading: false,
        isInitialized: true
      });

    } catch (err) {
      console.error('Error fetching user data:', err);
      set({ 
        error: err instanceof Error ? err.message : 'An unknown error occurred',
        user: null,
        userProfile: null,
        isLoading: false,
        isInitialized: true
      });
    }
  },

  refreshUser: async () => {
    const { fetchUserData } = get();
    // Don't show loading state for refresh
    await fetchUserData();
  },

  logout: async () => {
    try {
      set({ isLoading: true });
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        throw new Error(error.message);
      }

      set({ 
        user: null,
        userProfile: null,
        error: null,
        isLoading: false
      });
    } catch (err) {
      console.error('Logout error:', err);
      set({ 
        error: err instanceof Error ? err.message : 'Logout failed',
        isLoading: false
      });
    }
  },

  reset: () => set({
    user: null,
    userProfile: null,
    isLoading: true,
    error: null,
    isInitialized: false
  })
}));