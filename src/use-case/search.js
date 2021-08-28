module.exports = function makeSearch({ Company }) {
  return async function getMatchedCompanies(query, pageNumber) {
    if (!pageNumber) {
      throw new Error("Must provide page number");
    }

    const pageSize = 18;
    if (query && query.length > 0) {
      let data = await Company.find({
        $or: [
          {
            Name: {
              $regex: new RegExp(query),
            },
          },
          {
            Website: {
              $regex: new RegExp(query),
            },
          },
        ],
      })
        .sort({ Name: 1 })
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize);

      return data;
    } else {
      let data = await Company.find()
        .sort({ Name: 1 })
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize);

      return data;
    }
  };
};
