const { HttpError } = require("../../helpers");
const { Apartment } = require("../../models/apartment");

const getApartmentsById = async (req, res) => {
  const { id } = req.params;
  const apartment = await Apartment.findById(id);
  if (!apartment) {
    const error = HttpError(404);
    throw error;
  }
  res.json(apartment);
};
module.exports = getApartmentsById;
