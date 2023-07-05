export default function Button({ text }) {
  return (
    <button className="text-3xl bg-color-primary-light px-3 py-3 rounded-md text-white hover:bg-color-primary transition-all">
      {text}
    </button>
  );
}
