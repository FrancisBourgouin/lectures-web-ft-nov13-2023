import { usersObj } from "../data/userData";
import useForm from "../hooks/useForm";

export default function MessageForm(props) {
  const parsedUsers = Object.values(usersObj).map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const initialValues = { message: "", userId: undefined };

  const { formData, handleChange, handleSubmit } = useForm(initialValues, props.onSubmit);

  return (
    <form className="MessageForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="message"
        placeholder="Enter a message"
        value={formData.message}
        onChange={handleChange}
      />
      <select name="userId" value={formData.userId} onChange={handleChange}>
        <option value="">Pick a user</option>
        {parsedUsers}
      </select>
      <button>Send message</button>
    </form>
  );
}
