import { Service } from "@/service/service";
import { ResponseStatus } from "@/utils/constants";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    Service.verifyToken(signal).then((data) => {
      if (data.status === ResponseStatus.Ok) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });

    return () => controller.abort();
  }, []);

  return isAuth;
};
