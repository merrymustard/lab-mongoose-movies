  // const {
  //   model,
  //   Schema
  // } = require("mongoose")
  const mongoose = require("mongoose");
  const Schema = mongoose.Schema;

  const celebSchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
  }, {
    timestamps: true,
  })


  const celebrityMod = mongoose.model("Celebrity", celebSchema);
  module.exports = celebrityMod;