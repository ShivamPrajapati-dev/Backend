const { getMatchedCompanies } = require("../use-case");

const makeReadMatchedCompanies = require("./get-matched-companies");
const readMatchedCompanies = makeReadMatchedCompanies({ getMatchedCompanies });

module.exports = {
  readMatchedCompanies,
};
