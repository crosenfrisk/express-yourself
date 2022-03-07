async function loginFormHandler(event) {
  // Prevent page from re-loading
  event.preventDefault();

  // Locate username and password from within login.handlebars
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  // User must provide a username and a password to create login credentials using Post method/route, saving to db.
  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    // After login credentials are saved/created,
    // user is directed to their dashboard where they can add new posts or edit/delete existing posts
    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
}

// Login button, on click OR enter, will implement the login process with provided user credentials.
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
