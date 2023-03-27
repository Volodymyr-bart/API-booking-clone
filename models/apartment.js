/* eslint-disable no-useless-escape */
const { Schema, model } = require("mongoose");
// const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const apartmentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    owner: {
      Type: Array,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

apartmentSchema.post("save", handleMongooseError);

const Apartament = model("apartament", apartmentSchema);

module.exports = {
  Apartament,
};
