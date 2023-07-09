import { useRouter } from "next/router";

export default function BackButton({ route }) {
  const router = useRouter();
  return (
    <button
      className="bg-white rounded-full p-2"
      onClick={() => router.push(route)}
    >
      <img
        src="/icons/arrow-left.svg"
        alt="back"
        className="transition-all hover:-translate-x-2"
      />
    </button>
  );
}
