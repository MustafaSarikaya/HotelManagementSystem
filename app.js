var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var indexRouter = require('./routes/index');
var customersRouter = require('./routes/customer');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { version } = require('./package.json');
const logger = require('pino')();

const options = {
  swagger : '2.0',
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'HMS API docs',
        version: '0.1.0',
        description: "asdfjasdf"
      },
    },
    apis: ['./routes/*.js'],
  };

const swaggerSpec = swaggerJsdoc(options);


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/hms/api', indexRouter);
app.use('/hms/api/', customersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 8000

// Listening Server
app.listen(port, () => {
    console.log(`Server is up at port:${port}`);

    swaggerDocs(app, port);
})

function swaggerDocs(app, port) {
  // Swagger page
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Docs in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  logger.info(`Docs available at http://localhost:${port}/api-docs`);
}

module.exports = app;
