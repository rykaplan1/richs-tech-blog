const login = async (event) => {
  event.preventDefault();

  const email = $('#login-email').val();
  const password = $('#login-password').val();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      const data = await response.json();
      alert(data.message);
    }
  }
}

const signup = async (event) => {
  event.preventDefault();

  const name = $('#signup-name').val();
  const email = $('#signup-email').val();
  const password = $('#signup-password').val();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

$('#login-submit').click(login);
$('#signup-submit').click(signup);