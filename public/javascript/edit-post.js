async function editFormHandler(event) {
    event.preventDefault();
  
    const post_date = document.querySelector('input[name="post-date"]').value;
    const post_day = document.querySelector('input[name="post-day"]').value;
    const post_hour = document.querySelector('input[name="post-hour"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
  
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            post_date,
            post_day,
            post_hour
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
  
  document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler);