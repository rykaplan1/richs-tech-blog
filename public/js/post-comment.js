const postComment = async (event) => {
  event.preventDefault();

  const contents = $('#comment-input').val(); 
  const url = window.location.href;
  const post_id = url.substring(url.lastIndexOf('/') + 1);

  if (contents) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({contents, post_id}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

$('.submit').click(postComment);