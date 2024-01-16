export default function MessageListItem(props) {
  const { profile_url, username, content, datePosted } = props;

  const timePosted = new Date(datePosted);

  return (
    <li className="MessageListItem">
      <img src={profile_url} />
      <h1>{username}</h1>
      <p>{content}</p>
      <p>{timePosted.toLocaleTimeString()}</p>
    </li>
  );
}
