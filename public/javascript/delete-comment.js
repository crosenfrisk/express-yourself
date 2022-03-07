async function deleteCommentHandler(event, id) {
  // Prevents page from automatically re-loading.
    event.preventDefault();    
    
    // Identify the id for the particular comment
    const commentid = event.target.dataset.commentid;

    // Delete the appropriate comment per identified id
    const response = await fetch(`/api/comments/${commentid}`, {
      method: 'DELETE'
    });
  
    // Once comment is deleted, return the user to the homepage.
    if (response.ok) {
      document.location.replace('/');

      // otherwise alert error
    } else {
      alert(response.statusText);
    }
  }
  
  // Use delete button on comment to delete the particular comment on click
  document.querySelector('.delete-comment-btn').addEventListener('click', deleteCommentHandler);