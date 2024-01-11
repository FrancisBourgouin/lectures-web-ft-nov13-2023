import ReplyListItem from "./ReplyListItem";
import { generateReplyListItemInfo } from "../helpers/postHelpers";

export default function ReplyList(props) {
  const { replies, users } = props;

  const parsedReplies =
    Array.isArray(replies) &&
    replies.map((reply, index) => {
      const replyListItemInfo = generateReplyListItemInfo(reply, users);
      return <ReplyListItem {...replyListItemInfo} key={index} />;
    });

  return <section className="ReplyList">{parsedReplies}</section>;
}
