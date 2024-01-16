export default function LoginForm(props) {
  const initialValues = { email: "", password: "" };

  const { formData, handleChange, handleSubmit } = useForm(initialValues, props.onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        placeholder="enter your email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="enter your password"
        value={formData.password}
        onChange={handleChange}
      />
      <button>Log in</button>
    </form>
  );
}
