const generateBlogPost = (postData) => {
  const { id, title, body } = postData;

  const htmlStructure = `
  <li>
    <h1>POST #${id}: ${title}</h1>
    <p>${body}</p>
  </li>
  `;

  return htmlStructure;
};

const generateBlogPostButBetter = (postData) => {
  const { id, title, body } = postData;

  const $li = $("<li>");
  const $h1 = $("<h1>");
  const $p = $("<p>");

  $h1.text(`POST #${id}: ${title}`);
  $p.text(body);

  $li.append($h1);
  $li.append($p);

  $li.on("click", (event) => {
    $(event.currentTarget).css("background-color", generateRandomColor());
  });

  return $li;
};

// Security / Sanitization
// Extensibility
// Customization and just pure awesomeness

const generateRandomColor = () => {
  // RGB - HSL
  // R 0-255
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
};

const appendAllBlogPosts = (postData) => {
  for (const post of postData) {
    // const newPost = generateBlogPost(post);
    const newPost = generateBlogPostButBetter(post);
    $("ul").append(newPost);
  }
};

const fetchPostsFromAPI = () => {
  return $.get("https://jsonplaceholder.typicode.com/posts");
};

const reportError = (err) => {
  console.error("OH NO WE'RE BAD PEOPLE");
  console.log(err);
};

const sendPostToAPI = (serializedData) => {
  // Express

  // express.urlencoded()
  // express.json()

  return $.post("https://jsonplaceholder.typicode.com/posts", serializedData);
};

// BOOK
// Appendix (at the end)
// Prologue / Preface

// append;
// prepend;
