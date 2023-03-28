const { Apartment } = require("../../models/apartment");

const getApartments = async (req, res) => {
  console.log("here");
  const result = await Apartment.find({});
  res.json(result);
};
module.exports = getApartments;
