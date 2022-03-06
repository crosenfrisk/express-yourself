async function createNewPost(event) {
  // Prevent page from re-loading
  event.preventDefault();

  // Get title name from title input field
  const title = document.querySelector('input[name="post-title"]').value;
  // Get post content from post_content textarea
  const post_content = document.querySelector('textarea[name="post_content"]').value;

  // Create new post using Post method to add title and post content to database using JSON.
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // If all goes well, return to dashboard view, otherwise alert with status / error
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

// Use button with class "new-post-form" to create a new post on click or enter
document.querySelector('.new-post-form').addEventListener('submit', createNewPost);
