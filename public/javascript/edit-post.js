async function editFormHandler(event) {
  // Prevent page from automatically reloading
  event.preventDefault();

  // Locate title content from input field
  const title = document.querySelector('input[name="post-title"]').value.trim();
  // Locate post content from textarea
  const post_content = document.querySelector('textarea[name="post_content"]').value.trim();
  
  // Identify id of post to edit using split method to end of URL
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  
  // Update post using Put route, saving changes to title and / or post content.
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      post_content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // After update, return user to dashboard
  if (response.ok) {
    document.location.replace('/dashboard/');
    // otherwise alert with error
  } else {
    alert(response.statusText);
  }
}

// On submit, edited post will be updated / saved to DB. 
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
