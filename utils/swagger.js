const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const logger = require('pino')();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Welcome to HMS",
      version: "1.0.0",
      descrption: "Description",
    },
  },

  apis: ["./routes/*.js"],
};

const specs = swaggerJSDoc(options);
// logger.info(specs);

module.exports = (app) => app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
// module.exports = (app) => app.get("docs.json", (req, res) => {
//   res.setHeader("Content-Type", "application/json");
//   res.json(specs)});

