import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className="bg-white rounded-full p-2"
      onClick={() => router.push("/allblogs")}
    >
      <img src="/icons/arrow-left.svg" alt="back" />
    </button>
  );
}
