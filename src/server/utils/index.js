const { map, isEmpty } = require('lodash');

const mapPackageData = data => {
  if (isEmpty(data)) return [];

  return map(data, (value, key) => {
    const {
      collected: {
        metadata: {
          date,
          author: { name }
        },
        github: {
          homepage,
          starsCount,
          forksCount,
          issues: { openCount }
        }
      }
    } = value;

    return {
      name: key,
      update: date,
      author: name,
      github: {
        homepage,
        starsCount,
        forksCount,
        openCount
      }
    };
  });
};

const mapCountData = data => {
  if (isEmpty(data)) return [];

  return map(data, (value, key) => ({
    name: key,
    ...value
  }));
};

module.exports = {
  mapPackageData,
  mapCountData
};
