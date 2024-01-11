export default function ReplyListItem(props) {
  const { author, content, profileUrl } = props;
  return (
    <article className="ReplyListItem">
      <img src={profileUrl} alt="" />
      <h1>{author}</h1>
      <p>{content}</p>
    </article>
  );
}
