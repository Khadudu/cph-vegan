const mongoose = require("mongoose");

const subscriberSchema = mongoose.Schema({
  name: String,
  email: String,
  zipCode: Number
});

module.exports = mongoose.model("Subsriber", subscriberSchema);
