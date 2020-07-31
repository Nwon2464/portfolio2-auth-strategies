const passport = require("passport");

const router = require("express").Router();

//fetching from client
router.get("/current_user", (req, res) => {
  // res.send(req.user);
  res.send(req.user);
});

//auth logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

//auth with google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);
router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  res.redirect("/profile");
});

module.exports = router;
