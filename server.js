const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const PORT = 3000;

let apiRoutes = require("./api-routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("static"));

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  //   res.send("Hello World!!!");
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log("App listening on port 3000");
});
