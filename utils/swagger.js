const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "testApi",

      version: "1.0.0",

      descrption: "Description",
    },
  },

  apis: ["./routes/*.js"],
};

const specs = swaggerJSDoc(options);

module.exports = (app) => app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

