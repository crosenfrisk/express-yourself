async function deleteCommentHandler(event, id) {
    console.log("delete comment");
    event.preventDefault();

    console.log(event.target);
    
    // const id = window.location.toString().split('/')[
    //   window.location.toString().split('/').length - 1
    // ];

    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-comment-btn').addEventListener('click', deleteCommentHandler);