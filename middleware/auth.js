// user cannot access all routes, If user didn't login
module.exports = {
  ensureAuth: function (req, res, next) {
    // If the user is authenticated, then calling next() function
    // req object have isAuthenticated method
    if (req.isAuthenticated()) {
      return next();
    } else {
      // else redierct it '/'
      res.redirect("/");
    }
  },
  ensureGuest: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/dashboard");
    }
  },
};
