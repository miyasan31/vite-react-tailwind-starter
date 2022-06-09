import { useState } from "react";

export const useAuth = () => {
  const [isSignIn, _setIsSignIn] = useState<boolean>(false);

  return {
    isSignIn,
  };
};
