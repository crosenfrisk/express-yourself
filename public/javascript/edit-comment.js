async function editCommentHandler(event) {
  // Prevent page from reloading

  event.preventDefault();

  // Identify the comment to edit by taking the id from the end of URL string
  const comment_text = document
    .querySelector('textarea[name="comment-text"]')
    .value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  // Use PUT route to update comment (comment_text) for selected comment using id
  const response = await fetch(`/api/comments/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      comment_text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Once comment is updated, return the user to the dashboard
  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    // otherwise alert with error
    alert(response.statusText);
  }
}

// Use "Save Comment" button to update edited comment on click
document
  .querySelector(".save-comment")
  .addEventListener("click", editCommentHandler);
