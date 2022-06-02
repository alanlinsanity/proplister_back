const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contact: { 
        type: Number, 
        min: 80000000, 
        max: 99999999,
        required: true,
    },       
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    listings: {
        type: Array,
        default: [],
    }
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model('users', userSchema)

module.exports = userModel