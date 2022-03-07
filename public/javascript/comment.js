async function commentFormHandler(event) {
  // Prevent page from re-loading
  event.preventDefault();

  // Get comment text from textarea
  const comment_text = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();
  // Get post id from URL
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  // Create new comment using Post method and submit to database using JSON
  if (comment_text) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // If all goes well, reload page with new comment, otherwise alert error.
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

// Use button "comment-form" to submit new comment on click or enter
document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
