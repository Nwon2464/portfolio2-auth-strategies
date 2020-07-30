const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
require("./config/passport-setup");
const authRoutes = require("./routes/auth-routes");
const apiRoutes = require("./routes/api-routes.js");

const cookieSession = require("cookie-session");
require("dotenv").config();

const middleware = require("./middleware");
const router = require("./routes");
const keys = require("./config/keys");

const app = express();

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000, //1day for authorized cookie
    keys: [keys.session.cookieKey],
  })
);

//initialize passport after cookiesession has been issued
app.use(passport.initialize());
app.use(passport.session());

//mongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("Mongo DB Atlas has been connected! 👏");
});
app.use(morgan("common"));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(express.json()); //Body parser for post request
app.use("/api", apiRoutes);

app.use("/posts", router);
app.use("/auth", authRoutes);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

app.listen(5000 || process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}...👀`);
});
