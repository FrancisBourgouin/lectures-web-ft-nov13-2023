// {
//   "question": "I have a TV that suddenly stopped turning on. No signs of life. Any suggestions on how to diagnose and fix this issue?",
//   "profileUrl": "/profile_pictures/1.png",
//   "author": "CircuitSavior",
//   "replyAmount": 10
// }

export default function PostHeader(props) {
  const { question, profileUrl, author, replyAmount } = props;
  return (
    <section className="PostHeader">
      <h1>{question}</h1>
      <h2>
        By: <img src={profileUrl} /> <span>{author}</span>
      </h2>
      {replyAmount === 0 && <p>no replies so far</p>}
      {replyAmount === 1 && <p>1 reply so far</p>}
      {replyAmount > 1 && <p>{replyAmount} replies so far</p>}
    </section>
  );
}
