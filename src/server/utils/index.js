const { map, isEmpty, isArray, isObject } = require('lodash');

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

const mapDownload = data =>
  map(data, ({ day, downloads }) => ({
    x: day,
    y: downloads
  }));

const mapCountData = data => {
  if (isEmpty(data) || (!isArray(data) && !isObject(data))) {
    return [];
  }

  if (isObject(data)) {
    return [
      {
        id: data.package,
        data: mapDownload(data.downloads)
      }
    ];
  }

  return map(data, (value, key) => ({
    id: key,
    data: mapDownload(value.downloads)
  }));
};

module.exports = {
  mapPackageData,
  mapCountData
};
