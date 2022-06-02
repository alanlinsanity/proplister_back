const mongoose = require("mongoose");

const listingSchema = mongoose.Schema(
  {
    rentalType: {
        type: String,
        required: true,
      },
    property: {
      type: String,
      required: true,
    },
    postal: {
      type: String,
      required: true,
    },
    district: {
        type: Number,
        required: true,
      },
    propertyType: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    size: {
        type: Number,
        required: true,
      },
    noOfBedrooms: {
      type: Number,
      required: true,
    },
    noOfBathrooms: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    lister: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    images: [],
  },
  {
    timestamps: true,
  }
);

const listingModel = mongoose.model('listings', listingSchema)

module.exports = listingModel


    