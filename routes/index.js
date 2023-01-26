const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");

const Story = require("../models/Story");

// @desc    Login/Landing page
// @route   GET /
// Its gonnal look for templates or views named 'login'
// also design layout for login
// ensureGuest as middleware (user cannot access routes if he/she is not logged in), protected routes
router.get("/", ensureGuest, (req, res) => {
  res.render("login", {
    layout: "login",
  });
});

// @desc    Dashboard
// @route   GET /dashboard
// Its gonnal look for templates or views named 'dashboard'
// ensureAuth middleware to know that its authenticated
router.get("/dashboard", ensureAuth, async (req, res) => {
  try {
    // to pass the data in hbs template and render it
    //https://mongoosejs.com/docs/tutorials/lean.html
    const stories = await Story.find({ user: req.user.id }).lean();
    res.render("dashboard", {
      name: req.user.firstName,
      stories,
    });
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

module.exports = router;
