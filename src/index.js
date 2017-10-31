
function usersRetrieved(response) {
  return response.json();
}
function userJSONReady(users) {
  const usersDiv = document.getElementById("users");
  let usersHTML = "<h3>Users By Name</h3>";
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    usersHTML += "<div>" + user.name + "</div>";
  }
  usersDiv.innerHTML = (usersHTML);
}

const webRequestPromise = fetch("https://jsonplaceholder.typicode.com/users");
const getJsonPromise = webRequestPromise.then(usersRetrieved);
getJsonPromise.then(userJSONReady);

// COMMENTS
// https://jsonplaceholder.typicode.com/comments

const commentFetch = fetch("https://jsonplaceholder.typicode.com/comments");

commentFetch.then(response => response.json())
.then(comments => {
  console.log(comments)
  const commentsDiv = document.getElementById("comments");
  let commentsHTML = "<h3>Comments By Name</h3>";
  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    commentsHTML += "<div>" + comment.name + "</div>";
    console.log(comment.name);
  }
  commentsDiv.innerHTML = (commentsHTML);

})
.catch((error) => {
  console.log('Oops! Error fetching and parsing your data', error);
});
