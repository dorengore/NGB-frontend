import { ReactNode, useEffect } from "react";

import { useAppDispatch } from "./hooks";
import { setUser } from "./slices/auth-slice";

interface AuthInitializer {}

const AuthInitializer = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userIdFromLocalStorage = localStorage.getItem("userId");
      const userTokenFromLocalStorage = localStorage.getItem("token");
      const imageDataFromLocalStorage = localStorage.getItem("imageData");
      const bannerDataFromLocalStorage = localStorage.getItem("bannerData");
      const userNameFromLocalStorage = localStorage.getItem("username");

      if (userIdFromLocalStorage && userTokenFromLocalStorage) {
        dispatch(
          setUser({
            token: userTokenFromLocalStorage,
            userId: Number(JSON.parse(userIdFromLocalStorage)),
            imageData: imageDataFromLocalStorage,
            username: userNameFromLocalStorage,
            bannerData: bannerDataFromLocalStorage,
          })
        );
      }
    }
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthInitializer;
