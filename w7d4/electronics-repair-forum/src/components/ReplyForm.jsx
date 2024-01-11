import { useState } from "react";

export default function ReplyForm(props) {
  const [reply, setReply] = useState("");

  const handleChange = (event) => {
    if (event.target.value.length < 70) {
      setReply(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(reply);
    setReply("");
  };

  return (
    <form className="ReplyForm" onSubmit={handleSubmit}>
      <h1>Add a reply to this post</h1>
      <input
        type="text"
        placeholder="Enter the reply"
        onChange={handleChange}
        value={reply}
      />
      <button>Add the reply</button>
    </form>
  );
}
