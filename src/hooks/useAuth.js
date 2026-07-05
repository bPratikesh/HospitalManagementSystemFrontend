function useAuth() {
  // Temporary user (will come from localStorage after login)
  const user = null;

  //after implementing loginAPI
  //const user = JSON.parse(localStorage.getItem("user"));

  return {
    user,
    isAuthenticated: !!user,
    role: user?.role ?? null,
  };
}

export default useAuth;
