const Company = require("../model/company");

const makeSearch = require("./search");

const getMatchedCompanies = makeSearch({ Company });

module.exports = {
  getMatchedCompanies,
};
