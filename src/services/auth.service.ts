import { useState } from "react";

interface IAuthService {
  useAuth: () => boolean;
}

export const authService: IAuthService = {
  useAuth: () => {
    const [isSignIn] = useState<boolean>(false);
    return isSignIn;
  },
};
