import Form from "@/components/Form";
import Loader from "@/components/Loader";
import { useAuth } from "@/hooks/useAuth";
import { Service } from "@/service/service";
import { ResponseStatus } from "@/utils/constants";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Login() {
  const router = useRouter();

  const isAuth = useAuth();

  if (isAuth === null) {
    return <Loader />;
  }
  if (isAuth) {
    router.push("/allblogs");
    return <Loader />;
  }

  return <Form page="Login" />;
}
