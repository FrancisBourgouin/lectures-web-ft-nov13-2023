import MessageListItem from "./MessageListItem";

export default function MessageList(props) {
  const { messages, users } = props;

  const parsedMessages =
    Array.isArray(messages) &&
    messages.map((message) => (
      <MessageListItem
        profile_url={users[message.userId].profile_url}
        username={users[message.userId].username}
        content={message.content}
        datePosted={message.datePosted}
      />
    ));
  return (
    <section className="MessageList">
      <h1>Latest messages (most recent at bottom)</h1>
      <ul>{parsedMessages}</ul>
    </section>
  );
}
