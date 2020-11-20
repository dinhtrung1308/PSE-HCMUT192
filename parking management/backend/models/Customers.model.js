const mongoose = require("mongoose");
const CustomerSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Customers", CustomerSchema)
