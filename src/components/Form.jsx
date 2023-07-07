import InputBox from "./InputBox";
import Button from "./Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Service } from "@/service/service";
import { AlertStatus, ResponseStatus } from "@/utils/constants";
import { useDispatch } from "react-redux";
import { openAlert } from "@/redux/reducers/alert";

export default function Form({ page }) {
  const router = useRouter();

  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // useEffect(() => {
  //   console.log({ username, password, email, confirmPassword });
  // });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (page === "Login") {
      if (!username || !password) {
        alert("Enter valid username and password");
        return;
      }
      const response = await Service.login({ username, password });
      if (response.status === ResponseStatus.Ok) {
        dispatch(
          openAlert({ status: AlertStatus.Success, message: response.message })
        );
        router.push("/");
      } else {
        dispatch(
          openAlert({ status: AlertStatus.Error, message: response.message })
        );
      }
    } else {
      if (!username || !email || !password || password !== confirmPassword) {
        alert("Enter valid credentials");
        return;
      }

      const response = await Service.signUp({ username, email, password });
      if (response.status === ResponseStatus.Created) {
        router.push("/");
      }
    }
  };

  return (
    <main className="flex flex-col gap-10 justify-center items-center h-screen  text-4xl short:text-2xl short:gap-7">
      <form
        className="flex flex-col gap-16 bg-white rounded-3xl p-10 shadow-black shadow-lg opacity-0 animate-fade-quick fill-mode-forwards md:w-3/4 short:gap-10"
        onSubmit={handleSubmit}
      >
        <h3 className="self-center text-6xl short:text-3xl">{page}</h3>
        {page === "Login" ? (
          <>
            <InputBox
              credential={"Username"}
              type={"text"}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <InputBox
              credential={"Password"}
              type={"password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </>
        ) : (
          <>
            <InputBox
              credential={"Email Id"}
              type={"email"}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <InputBox
              credential={"Username"}
              type={"text"}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <InputBox
              credential={"Password"}
              type={"password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <InputBox
              credential={"Confirm password"}
              type={"password"}
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </>
        )}
        <div className="self-center">
          <Button text={page} type={"submit"} />
        </div>
      </form>
      <Link href="/">
        <h5 className="text-white underline underline-offset-4 cursor-pointer  transition-all hover:scale-105">
          Go back to homepage.
        </h5>
      </Link>
    </main>
  );
}
