async function editCommentHandler(event) {
  console.log("edit-comment");
    event.preventDefault();
  
    const comment_text = document.querySelector('textarea[name="comment-text"]').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    console.log(id);
    
    const response = await fetch(`/api/comments/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        comment_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  

  document.querySelector('.save-comment').addEventListener('click', editCommentHandler);
  