import "./App.scss";
import Header from "./components/Header";
import PostHeader from "./components/PostHeader";
import ReplyForm from "./components/ReplyForm";
import ReplyList from "./components/ReplyList";
import ReplyListItem from "./components/ReplyListItem";

import { topicsObj } from "../../data/topics";
import { usersObj } from "../../data/users";
import { generatePostHeaderInfo } from "./helpers/postHelpers";
import { useState } from "react";

// {userId:1, content:""}
// const singularReply = t1.replies[4];
// const allTheReplies = t1.replies;

function App() {
  const [users, setUsers] = useState(usersObj);
  const [topics, setTopics] = useState(topicsObj);
  const [currentTopicId, setCurrentTopicId] = useState(1);

  const navigateTopic = (isNext) => {
    const availableIds = Object.keys(topics);
    // [1, 2, 3];
    const nextValueIndex =
      (availableIds.indexOf(currentTopicId) + 1) % availableIds.length;
    const prevValueIndex =
      availableIds.indexOf(currentTopicId) - 1 === -1
        ? availableIds.length - 1
        : availableIds.indexOf(currentTopicId) - 1;

    if (isNext) {
      setCurrentTopicId(availableIds[nextValueIndex]);
    } else {
      setCurrentTopicId(availableIds[prevValueIndex]);
    }
  };

  const topic = topics[currentTopicId];

  // const [topic, setTopic] = useState(t1);

  const fakeOnSubmit = (reply) => console.log(reply);

  const postHeaderInfo = generatePostHeaderInfo(topic, users);
  // const replyListItemInfo = generateReplyListItemInfo(singularReply, usersObj);

  const addReplyToTopic = (reply) => {
    const updatedTopics = { ...topics };

    const updatedTopic = { ...topic };

    const replyObj = {
      content: reply,
      userId: Math.ceil(Math.random() * 39),
    };

    updatedTopic.replies = [...topic.replies, replyObj];

    updatedTopics[currentTopicId] = updatedTopic;

    setTopics(updatedTopics);
  };

  const addReplyToTopicOld = (reply) => {
    const updatedTopic = { ...topic };

    const replyObj = {
      content: reply,
      userId: Math.ceil(Math.random() * 39),
    };

    updatedTopic.replies = [...topic.replies, replyObj];

    setTopic(updatedTopic);
  };

  return (
    <>
      <Header />
      <main>
        <section className="Navigator">
          <button onClick={() => navigateTopic(false)}>Back</button>
          <span>Currently looking at topic #{currentTopicId}</span>
          <button onClick={() => navigateTopic(true)}>Next</button>
        </section>
        <PostHeader {...postHeaderInfo} />
        <ReplyList replies={topic.replies} users={users} />
        <ReplyForm onSubmit={addReplyToTopic} />
      </main>
    </>
  );

  // return <Header />;
  // return <PostHeader {...postHeaderInfo} />;
  // return <ReplyForm onSubmit={fakeOnSubmit} />;
  // return <ReplyList replies={allTheReplies} users={usersObj} />;
  // return <ReplyListItem {...replyListItemInfo} />;
}

export default App;
