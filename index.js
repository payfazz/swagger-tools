const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
// const fs = require("fs");

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));

// fs.readdir("/data/fazzcard-backend/docs", (error, items) => {
//   app.get("/", (req, res) => {
//     res.render("main", {
//       title: "Route files",
//       items: items.map(item => {
//         return {
//           title: item,
//           path: item.replace(/\.[^/.]+$/, "")
//         };
//       })
//     });
//   });
//   items.forEach(val => {
//     var path = val.replace(".yaml", "");
    
//   });
// });
app.use(`/`, swaggerUi.serve, (req, res) => {
    swaggerUi.setup(YAML.load(`/data/swagger.yaml`))(req, res);
  });
app.listen(3000);
