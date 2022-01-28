const submitPost = async (event) => {
  event.preventDefault();

  const title = $('#post-title').val();
  const contents = $('#post-contents').val();
  
  if (title && contents) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, contents }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

$('.submit').click(submitPost);