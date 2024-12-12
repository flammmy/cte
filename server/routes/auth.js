const router = require("express").Router();
const passport = require("passport");

// Initiate Google login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Handle Google callback
router.get(
  "/google/callback", // Only the path here
  passport.authenticate("google", { failureRedirect: "/login/failed" }),
  function (req, res) {
    // Successful authentication
    res.redirect("/");
  }
);

// Login failed route
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "Login failed",
  });
});

// Login success route
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Login successful",
      user: req.user,
    });
  } else {
    res.status(403).json({ error: true, message: "Not authorized" });
  }
});

// Logout route
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL); // Redirect to client app
});

module.exports = router;
