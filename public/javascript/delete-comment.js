async function deleteCommentHandler(event, id) {
    event.preventDefault();    
    
    const commentid = event.target.dataset.commentid;

    const response = await fetch(`/api/comments/${commentid}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-comment-btn').addEventListener('click', deleteCommentHandler);