import { getUser } from "@/utils/storage";

function useAuth() {
  const user = getUser();

  return {
    user,
    isAuthenticated: !!user,
    role: user?.role ?? null,
  };
}

export default useAuth;
