// models/MessageModel.js
const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  text: { type: String, required: true },
  isRead: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
});

const MessageModel = mongoose.model("Message", MessageSchema);
module.exports = MessageModel;
