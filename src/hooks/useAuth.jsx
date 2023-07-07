import { Service } from "@/service/service";
import { ResponseStatus } from "@/utils/constants";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(null);
  useEffect(() => {
    Service.verifyToken().then((data) => {
      if (data.status === ResponseStatus.Ok) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, []);

  return isAuth;
};
