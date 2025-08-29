import { useEffect } from "react";
import { useUserStore } from "@/stores/userStore";

export function useRefetchUser() {
  const refreshUser = useUserStore((s) => s.refreshUser);

  useEffect(() => {
    const handleFocus = () => {
      refreshUser();
    };
    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        refreshUser();
      }
    });
    return () => {
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleFocus);
    };
  }, [refreshUser]);
}