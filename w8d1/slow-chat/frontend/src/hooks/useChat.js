import { usersObj } from "../data/userData";
import axios from "axios";
import { useEffect, useState } from "react";
import useWow from "./useWow";

const chatReducer = (state, action) => {
  switch (action.type) {
    case "fetch":
      // ..
      break;
    case "add":
      // ...
      break;
  }
};

export default function useChat() {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState(usersObj);

  const fetchMessages = () => {
    console.log("fetching...");

    axios
      .get("/api/messages")
      .then((res) => res.data)
      .then((data) => setMessages(data))
      .catch((err) => console.log(err));
  };

  const addMessage = (formData) => {
    const { userId, message } = formData;

    const messageInfo = {
      type: "chat",
      content: message,
      datePosted: new Date().toUTCString(),
      userId,
    };

    axios
      .post("/api/messages", { ...messageInfo })
      .then((res) => res.data)
      .then((data) => setMessages([...messages, data]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Fetching new posts");
      fetchMessages();
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return { messages, users, addMessage };
}
