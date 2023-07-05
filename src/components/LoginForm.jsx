export default function LoginForm({ type }) {
  return (
    <div className="flex flex-col gap-8">
      <label htmlFor={type} className="text-black">
        {type === "username" ? "User Name" : "Password"}
      </label>
      <input
        type={type === "username" ? "text" : "password"}
        name={type}
        id={type}
        className="border-2 border-purple-200 rounded-xl p-3 focus:border-color-secondary"
        placeholder={`Enter ${type === "username" ? "User Name" : "Password"}`}
      />
    </div>
  );
}
