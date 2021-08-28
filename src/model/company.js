const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Website: {
      type: String,
      required: true,
    },
    Location: {
      type: String,
    },
    Zipcode: {
      type: Number,
    },
    Description: {
      type: String,
    },
    Owner: {
      type: String,
    },
    Established: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);
const model = mongoose.model("company", schema);
module.exports = model;
