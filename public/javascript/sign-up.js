async function signupFormHandler(event) {
  // Prevent page from auto-reloading
  event.preventDefault();

  // Locate username/password values from signup page input fields.
  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  // User must provide a username and password to create a "user account"
  if (username && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    // Once user is signed up, they are directed to their own dashboard.
    if (response.ok) {
      document.location.replace("/dashboard/");
      // if error, alert
    } else {
      alert(response.statusText);
    }
  }
}

// Submit (on click or enter) will save username and password to db.
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
