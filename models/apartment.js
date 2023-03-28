/* eslint-disable no-useless-escape */
const { Schema, model } = require("mongoose");
// const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const apartmentSchema = new Schema(
  {
    title: {
      type: String,
      // required: true,
    },
    imgUrl: {
      type: String,
      // required: true,
    },
    rating: {
      type: Number,
      // required: true,
    },
    price: {
      type: Number,
      // required: true,
    },
    location: {
      Type: Object,
    },
    owner: {
      Type: Object,
    },
  },
  { versionKey: false, timestamps: true }
);

apartmentSchema.post("save", handleMongooseError);

const Apartment = model("apartment", apartmentSchema);

module.exports = {
  Apartment,
};
