export default function InputBox({ credential, type }) {
  return (
    <div className="flex flex-col gap-8">
      <label htmlFor={credential} className="text-black">
        {credential}
      </label>
      <input
        type={type}
        className="border-2 border-purple-200 rounded-xl p-3 focus:border-color-secondary"
        placeholder={
          credential === "Confirm password"
            ? `Re-enter password`
            : `Enter ${credential}`
        }
      />
    </div>
  );
}
