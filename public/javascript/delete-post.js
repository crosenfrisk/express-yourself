async function deleteFormHandler(event) {
  // Prevent page from automatically re-loading
  event.preventDefault();

  // To get the id of the needed post, split id number from the end of the URL string
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  // Delete the specified post
  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
  });

  // Once post is deleted return the user to the dashboard page.
  if (response.ok) {
    document.location.replace('/dashboard/');
    // otherwise display alert error
  } else {
    alert(response.statusText);
  }
}

// "Delete Post" button on dashboard/edit post page, works on click
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
