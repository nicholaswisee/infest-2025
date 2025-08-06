"use client";
import { useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useUserStore } from '@/stores/userStore';

export const useInitializeUserStore = () => {
  const { 
    fetchUserData, 
    setUser, 
    setUserProfile, 
    setError, 
    setLoading,
    isInitialized,
    user
  } = useUserStore();

  useEffect(() => {
    const supabase = createClient();

    if (!isInitialized) {
      fetchUserData();
    }

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state change:', event, 'Session:', !!session);
      
      if (event === 'SIGNED_IN' && session) {
        // Refresh user data when user signs in
        if (!user) {
            console.log('User signed in, fetching user data...');
            await fetchUserData();
        }
      } else if (event === 'SIGNED_OUT' || !session) {
        // Clear user data when user signs out or session is null
        console.log('User signed out or no session, clearing user data...');
        setUser(null);
        setUserProfile(null);
        setError(null);
        setLoading(false);
      } else if (event === 'TOKEN_REFRESHED' && session) {
        // Optionally refresh user data when token is refreshed
        console.log('Token refreshed, user data should still be valid');
        // You can choose to refresh user data here or leave it as is
      }
    });

    return () => subscription.unsubscribe();
  }, [fetchUserData, setUser, setUserProfile, setError, setLoading, isInitialized]);
};