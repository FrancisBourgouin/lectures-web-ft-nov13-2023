$(document).ready(() => {
  // Go over the post data, iterate the array and generate a blogpost
  // appendAllBlogPosts(postData);

  fetchPostsFromAPI().then(appendAllBlogPosts).catch(reportError);

  // $.post("https://jsonplaceholder.typicode.com/posts", {
  //   userId: 5,
  //   title: "Yeah",
  //   body: "AHHHHHHH YEAH.",
  // });

  // $.ajax({
  //   method: "GET",
  //   url: "https://jsonplaceholder.typicode.com/posts",
  // })
  //   .then((response) => appendAllBlogPosts(response))
  //   .catch((err) => console.log(err));

  $("form").on("submit", (event) => {
    event.preventDefault();
    const serializedData = $("form").serialize();

    $("button").css("background-color", "#ebd80c");

    sendPostToAPI(serializedData)
      .then((response) => appendAllBlogPosts([response]))
      .then(() => {
        $("input").val("");
        $("textarea").val("");
        setTimeout(() => {
          $("button").css("background-color", "#00ee00");
        }, 1500);
      })
      .catch(reportError);
  });
});
