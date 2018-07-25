const { map, isEmpty } = require('lodash');

const mapPackageData = data => {
  if (isEmpty(data)) return [];

  return map(data, (value, key) => {
    const { analyzedAt } = value;

    return {
      name: key,
      update: analyzedAt
    };
  });
};

module.exports = {
  mapPackageData
};
