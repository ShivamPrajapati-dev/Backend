module.exports = function makeReadMatchedCompanies({ getMatchedCompanies }) {
  return async function readMatchedCompanies(httpRequest) {
    const query = httpRequest.body.query;
    const pageNumber = httpRequest.body.pageNumber;
    try {
      const data = await getMatchedCompanies(query, pageNumber);
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: data,
      };
    } catch (e) {
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
};
