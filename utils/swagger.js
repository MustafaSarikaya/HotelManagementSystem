const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { version } = require('../package.json');
const logger = require('pino')();

function swaggerDocs(app, port) {
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
  // Swagger page
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Docs in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  logger.info(`Docs available at http://localhost:${port}/api-docs`);
}

module.exports = swaggerDocs;
