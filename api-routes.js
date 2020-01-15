let router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ status: "API Routes Working", message: "Welcome to the API" });
});

module.exports = router;
