let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://facundo-portfolio:${process.env.MONGO_ATLAS_PW}@fletech.o6psu.mongodb.net/portfolio?retryWrites=true&w=majority`
);

let indexRouter = require("./routes/index");
let apiRouter = require("./routes/api");
let apiPortfolioRouter = require("./routes/apiPortfolio");

let app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
// ROUTES
app.use("/", indexRouter);
app.use("/api", apiRouter);
app.use("/facundo", apiPortfolioRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
