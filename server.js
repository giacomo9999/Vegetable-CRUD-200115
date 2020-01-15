const express = require("express");
const app = express();
const PORT = 3000;

const bodyParser = require("body-parser");

let apiRoutes = require("./api-routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.listen(PORT, () => {
  console.log("App listening on port 3000");
});
