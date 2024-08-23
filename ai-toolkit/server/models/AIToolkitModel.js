const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  image: String,
  lastLogin: Date, // Field to track the last login date
  isActive: { type: Boolean, default: false }, // Field to track if the user has activated their account
});

const EmployeeModel = mongoose.model("AI_ToolKit", EmployeeSchema);
module.exports = EmployeeModel;
