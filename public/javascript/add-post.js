async function newFormHandler(event) {
    event.preventDefault();
  
    const day = document.querySelector('input[name="post-day"]').value;
    const time = document.querySelector('input[name="post-time"]').value;
    const post_body = document.querySelector('input[name="post-body"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        day,
        time,
        post_body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);