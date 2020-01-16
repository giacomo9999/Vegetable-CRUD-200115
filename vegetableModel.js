const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Jim_CS:7i!MwiaivW8Z@!i@cluster0-e5ap3.mongodb.net/vegetables?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("DB Connection succesfully established"))
  .catch(err => console.error(err));

const vegetableSchema = mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  shape: { type: String },
  create_date: { type: Date, default: Date.now }
});

const Vegetable = mongoose.model("vegetable", vegetableSchema);

module.exports = Vegetable;
