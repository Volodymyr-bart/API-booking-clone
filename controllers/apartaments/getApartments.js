const { Apartments } = require("../../models/apartment");

const getApartments = async (req, res) => {
  console.log("here");
  const result = await Apartments.find({});
  res.json(result);
};
module.exports = getApartments;
