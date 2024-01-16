import "./App.scss";
import Header from "./components/Header";
import MessageList from "./components/MessageList";
import MessageForm from "./components/MessageForm";
import useChat from "./hooks/useChat";

function App() {
  const { messages, users, addMessage } = useChat();

  // dispatch("add")
  // dispatch("edit")
  // dispatch("delete")
  // useEffect(() => {
  //   const report = (event) => console.log("clicked!", event.clientX, event.clientY);
  //   document.addEventListener("click", report);

  //   return () => document.removeEventListener("click", report);
  // }, []);

  return (
    <>
      <Header />
      <main>
        <MessageList messages={messages} users={users} />
        <MessageForm onSubmit={addMessage} />
      </main>
    </>
  );
}

export default App;
