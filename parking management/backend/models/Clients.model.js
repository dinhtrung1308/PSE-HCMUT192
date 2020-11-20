const mongoose = require("mongoose");
const ClientSchema = mongoose.Schema({
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
  // location:{
  //     type: String,
  //     // require: true,
  // }
});

module.exports = mongoose.model("clients", ClientSchema);
