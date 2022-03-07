// function to provide additional security to site, requiring users to be logged in
// to make changes to any posts; can only edit and/or delete THEIR posts/comments 
// tied to their user_id.

// withAuth is required (as an import) for several routes; 
// if the user isn't logged in, an error will occur.

const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect('/login');
  } else {
    next();
  }
};

// To export withAuth function and use across application.
module.exports = withAuth;
