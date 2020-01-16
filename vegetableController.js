Vegetable = require("./vegetableModel");

exports.index = (req, res) => {
  console.log("Now I Am Here");
  Vegetable.find((err, vegetables) => {
    console.log(vegetables);
    if (err) {
      return res.json({ status: "Error", message: err });
    }
    return res.json({
      status: "Success",
      message: "Vegetables retrieved successfully",
      data: vegetables
    });
  });
};

exports.new = (req, res) => {
  const vegetable = new Vegetable();
  vegetable.name = req.body.name;
  vegetable.color = req.body.color;
  vegetable.shape = req.body.shape;

  vegetable.save(err => {
    if (err) {
      return res.json(err);
    }
  });

  return res.json({ message: "New vegetable created!", data: vegetable });
};

exports.viewOne = (req, res) => {
  Vegetable.findById(req.params.vegetable_id, (err, vegetable) => {
    if (err) return res.send(err);
    return res.json({
      message: "Vegetable details loading...",
      data: vegetable
    });
  });
};

exports.update = (req, res) => {
  Vegetable.findById(req.params.vegetable_id, (err, vegetable) => {
    if (err) return res.send(err);

    vegetable.name = req.body.name;
    vegetable.color = req.body.color;
    vegetable.shape = req.body.shape;

    console.log("Here " + req.params.vegetable_id, req.body.name);
    vegetable.save(err => {
      if (err) return res.json(err);
      return res.json({ message: "Vegetable info updated", data: vegetable });
    });
  });
};

exports.delete = (req, res) => {
  Vegetable.deleteOne({ _id: req.params.vegetable_id }, (err, vegetable) => {
    if (err) return res.send(err);
    return res.json({ status: "Success", message: "Vegetable deleted." });
  });
};
