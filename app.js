var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var swagger = require("./utils/swagger");

var indexRouter = require("./routes/index");
var customersRouter = require("./routes/customer");

const dotenv = require("dotenv");
dotenv.config({path: '.env.local'});

var app = express();


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
swagger(app);

app.use("/hms/api", indexRouter);
app.use("/hms/api/", customersRouter);

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

const port = process.env.PORT || 8000;

// Listening Server
app.listen(port, () => {
  console.log(`Server is up at port:${port}`);  
});

module.exports = app;
