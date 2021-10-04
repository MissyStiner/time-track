async function newFormHandler(event) {
  event.preventDefault();

  const post_date = document.querySelector('input[name="post-date"]').value;
  const post_day = document.querySelector('input[name="post-day"]').value;
  const post_time = document.querySelector('input[name="post-time"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      post_date,
      post_day,
      post_time
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

document.querySelector('#add-post-form').addEventListener('submit', newFormHandler);