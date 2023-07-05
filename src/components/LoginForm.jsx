export default function LoginForm({ type }) {
  return (
    <div className="flex flex-col gap-10">
      <label htmlFor={type} className="text-white">
        {type === "username" ? "User Name" : "Password"}
      </label>
      <input type="text" name={type} id={type} />
    </div>
  );
}
