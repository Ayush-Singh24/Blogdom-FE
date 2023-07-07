import Form from "@/components/Form";
import Loader from "@/components/Loader";
import { useState } from "react";

export default function Login() {
  const [isAuth, setIsAuth] = useState(null);
  if (isAuth === null) {
    return <Loader />;
  }

  return <Form page="Login" />;
}
