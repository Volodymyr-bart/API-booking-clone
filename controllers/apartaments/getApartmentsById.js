const { Apartment } = require("../../models/apartment");

const getApartmentsById = async (req, res) => {
  console.log("here");
  const result = await Apartment.find({});
  res.json(result);
};
module.exports = getApartmentsById;
