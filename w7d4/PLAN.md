# ERF: Electronics Repair Forum

Create a forum-like website where we see questions and their replies. We should see the information for the users, profile pictures and responses.

## User stories

- A user can post a new question on the forum (Stretch)
- A user can post a reply to an existing question
- A user can like a reply (upvote) (Stretch)

## Data

### User

```jsx
const user = {
  id,
  username,
  profile_picture_url: "...",
  description,
};
```

```jsx
const user = {
  id: 1,
  profile_url: "/profile_pictures/1.png",
  username: "CircuitSavior",
  bio: "Electronics enthusiast, on a mission to resurrect circuits from the dead.",
};
```

### Topic

```jsx
const topic = {};
```

```jsx
const topic = {
  userId: 8,
  question:
    "I'm working on a laptop that isn't charging properly. It only charges when the charging cable is held at a certain angle. What could be causing this issue?",
  replies: [],
};
```

### Reply

```jsx
const reply = {
  userId: 8,
  content: "",
  likes: 0,
};
```

```jsx
const reply = {
  userId: 2,
  content: "Check the power cable and outlet first. Sometimes it's a simple power issue.",
  likes: 0,
};
```

### Topics

```jsx
const topics = {};
```

```jsx
const topics = {
  1: question,
  2: question,
};
```

### Users

```jsx
const users = {};
```

```jsx
const users = {
  1: user,
  2: user,
};
```

## Seed Data

Go see files questions.js + users.js

## Structure

### HTML

- header
  - h1
- main
  - article
    - header
      - h1 question
      - div (profile)
      - p by..
      - p x replies
    - ul
      - li
        - p answer
        - div (profile)
        - p username
      - li
        - p answer
        - div (profile)
        - p username
    - form
      input answer
      button submit

### Components

- Header
- TopicList
  - TopicListItem
    - ReplyList
      - ReplyListItem
    - ReplyForm

### Component Data

- App
  - Header (Props: Nothing | State: Nothing)
  - TopicList (Props: Nothing | State: topics{}, users{} | Fct: addReplyToTopic)
    - TopicListItem (Props: topic{}, addReplyToTopic | State: replyVisible?)
      - ReplyList (Props: reply[] | State: Nothing)
        - ReplyListItem (Props: answer, profile_url, username | State: Nothing)
      - ReplyForm (Props: addReplyToTopic)

### Helper functions!

```jsx
const addReplyToTopic = (text, topicId) => {
  const updatedTopics = { ...topics };
  const updatedTopic = { ...topics[topicId] };

  const newReply = { userId: Math.floor(Math.random() * 39), content: text };

  updatedTopic.replies = [...updatedTopic.replies, newReply];

  updatedTopics[topicId] = updatedTopic;

  return updatedTopics;
};

const formatTopic = (topic, users) => {
  const formattedTopic = {
    id: topic.id,
    userId: topic.userId,
    question: topic.question,
    username: users[topic.userId].username,
    profile_url: users[topic.userId].profile_url,
  };

  const formattedReplies = topic.replies.map((reply) => ({
    userId: reply.userId,
    content: reply.content,
    username: users[reply.userId].username,
    profile_url: users[reply.userId].profile_url,
  }));

  formattedTopic.replies = formattedReplies;

  return formattedTopic;
};
```
