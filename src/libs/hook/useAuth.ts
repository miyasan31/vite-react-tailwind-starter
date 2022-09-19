import { useState } from "react";

export const useAuth = () => {
  const [isSignIn] = useState<boolean>(false);

  return {
    isSignIn,
  };
};
