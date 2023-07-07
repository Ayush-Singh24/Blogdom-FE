import Link from "next/link";

export default function Button({ text, type, onClick }) {
  return (
    <button
      className="text-3xl bg-color-primary-light px-3 py-3 rounded-md text-white hover:bg-color-primary transition-all"
      type={type ? type : "button"}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
