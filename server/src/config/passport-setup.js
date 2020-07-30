const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");
const Users = require("../models/user");

//sends a cookie to the browser
passport.serializeUser((user, done) => {
  console.log(user);
  done(null, user.id);
});

// browser sends the cookie back and received the id
passport.deserializeUser((id, done) => {
  console.log("deserialized");

  Users.findById(id).then((user) => {
    done(null, user).catch((err) => console.log(err));
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientId,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      //check if user already exists in our db

      try {
        Users.findOne({
          googleId: profile.id,
        }).then((currentUser) => {
          if (currentUser) {
            //already have user
            console.log("user has already id");
            done(null, currentUser);
          } else {
            // if not, create user in our db
            new Users({
              googleId: profile.id,
              familyName: profile.name.familyName,
              givenName: profile.name.givenName,
              locale: profile._json.locale,
              provider: profile.provider,
            })
              .save()
              .then((newUser) => {
                console.log("new user created" + newUser);
                done(null, newUser);
              });
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  )
);
