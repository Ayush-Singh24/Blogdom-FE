export default function InputBox({ credential, type, value, onChange }) {
  return (
    <div className="flex flex-col gap-8">
      <label htmlFor={credential} className="text-black">
        {credential}
      </label>
      <input
        type={type}
        className="border-2 border-purple-200 rounded-xl p-3 ouline 
        focus:invalid:ouline-2 invalid:outline-red-600 bg-slate-100"
        required
        value={value}
        onChange={onChange}
        placeholder={
          credential === "Confirm password"
            ? `Re-enter password`
            : `Enter ${credential}`
        }
      />
    </div>
  );
}
