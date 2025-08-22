"use client";

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useUserStore } from '@/stores/userStore';

export const LoginSuccessHandler = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { refreshUser, setLoading } = useUserStore();

  useEffect(() => {
    const loginSuccess = searchParams.get('login');

    if (loginSuccess === 'success') {
      (async () => {
        setLoading(true);
        await refreshUser();
        const url = new URL(window.location.href);
        url.searchParams.delete('login');
        router.replace(url.pathname + url.search, { scroll: false });
      })();
    }
  }, [searchParams, refreshUser, router]);

  return null;
};

export default LoginSuccessHandler;