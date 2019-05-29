const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
// const fs = require("fs");

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));

app.use(`/`, swaggerUi.serve, (req, res) => {
    swaggerUi.setup(YAML.load(`/data/swagger.yaml`))(req, res);
  });
app.listen(3000);
