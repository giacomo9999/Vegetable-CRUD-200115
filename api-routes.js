let router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ status: "API Routes Working", message: "Welcome to the API" });
});

const vegetableController = require("./vegetableController");

router
  .route("/vegetables")
  .get(vegetableController.index)
  .post(vegetableController.new);

router
  .route("/vegetables/:vegetable_id")
  .get(vegetableController.viewOne)
  .patch(vegetableController.update)
  .put(vegetableController.update)
  .delete(vegetableController.delete);

module.exports = router;
