import Form from "@/components/Form";
import Loader from "@/components/Loader";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";

export default function SignUp() {
  const isAuth = useAuth();
  const router = useRouter();

  if (isAuth === null) {
    return <Loader />;
  }

  if (isAuth) {
    router.push("/allblogs");
    return <Loader />;
  }
  return <Form page="Sign Up" />;
}
