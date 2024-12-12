const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

// Configure Passport.js with Google Strategy
passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:4000/auth/google/callback",
  },
  async function(accessToken, refreshToken, profile, cb) {
    try {
      console.log("Google Profile:", profile); // For debugging
      // Replace this with your database logic
      const user = { id: profile.id, email: profile.emails[0].value, name: profile.displayName };
      return cb(null, user); // Pass user to serializeUser
    } catch (err) {
      return cb(err, null); // Handle errors gracefully
    }
  }
));

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user
passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;
