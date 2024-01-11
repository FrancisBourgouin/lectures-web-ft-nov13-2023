export const generateReplyListItemInfo = (reply, users) => {
  const output = {};
  const user = users[reply.userId];

  output.content = reply.content;
  output.profileUrl = user.profile_url;
  output.author = user.username;

  return output;
};

export const generatePostHeaderInfo = (topic, users) => {
  const output = {};
  const user = users[topic.userId];

  output.question = topic.question;
  output.profileUrl = user.profile_url;
  output.author = user.username;
  output.replyAmount = topic.replies.length;

  return output;
};
