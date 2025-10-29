

// login.js

document.getElementById('loginBtn').addEventListener('click', async () => {
  // 🟢 1️⃣ We obtain the values ​​from the form
  const identifier = document.getElementById('username').value; // It can be email or username
  const password = document.getElementById('password').value;

  try {
    // 🟢 2️⃣ We make the request to Strapi
    const res = await fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier, password })
    });

    const data = await res.json();

    // 🟢 3️⃣ If the response contains a token (JWT), the login was successful.
    if (data.jwt) {
      // We store the token in localStorage for future requests
      localStorage.setItem('token', data.jwt);
      localStorage.setItem('username', data.user.username);

      // We redirect to the home page
      window.location.href = 'home.html';
    } else {
      // 🟠 4️⃣ We display a message if something goes wrong.
      document.getElementById('message').textContent =
        data.error?.message || 'Error al iniciar sesión';
    }
  } catch (error) {
    console.error('Error en la conexión con Strapi:', error);
    document.getElementById('message').textContent =
      'No se pudo conectar al servidor.';
  }
});



/* document.getElementById('loginBtn').addEventListener('click', async () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const res = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();

  if (data.success) {
    window.location.href = 'home.html';
  } else {
    document.getElementById('message').textContent = data.message;
  }
});
 */