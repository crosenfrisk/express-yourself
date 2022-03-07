async function logout() {
  // Function for logging user out using post method/route.
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  // After being logged out, user is redirected to homepage,
  // removing access to posting, editiing, or deleting posts or comments.
  if (response.ok) {
    document.location.replace("/");
    // if logout does not work, display alert/error
  } else {
    alert(response.statusText);
  }
}

// On clicking logout button, user is logged out from session.
document.querySelector("#logout").addEventListener("click", logout);
