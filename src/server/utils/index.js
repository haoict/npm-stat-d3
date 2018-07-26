const { map, isEmpty, isArray, isObject, forEach } = require('lodash');
const axios = require('axios');
const { format, subMonths } = require('date-fns');
const { packageEndpoint, countEndpoint } = require('../config/api');

const FULL_DATE_FORMAT = 'YYYY-MM-DD';
const DATE_FORMAT = 'MM/DD';

const graphColors = [
  '#44d9cd',
  '#4a9eda',
  '#6872e0',
  '#9966e0',
  '#d665e0',
  '#e066ad',
  '#e16973',
  '#da864a',
  '#d7c938',
  '#96d73b',
  '#54da48',
  '#46da84'
];

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

const dataByMonth = data => {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const months = {};

  forEach(data, ({ day, downloads }) => {
    const newDate = new Date(day);
    const month = monthNames[newDate.getMonth()];
    const year = `${newDate.getFullYear()}`.slice(-2);
    const group = `${month}'${year}`;
    if (!months[group]) {
      months[group] = 0;
    }
    months[group] += downloads;
  });

  return months;
};

const mapDownload = (data, months = 1) => {
  if (months > 1) {
    const mappedData = dataByMonth(data);

    return map(mappedData, (value, key) => ({
      x: key,
      y: value
    }));
  }

  return map(data, ({ day, downloads }) => ({
    x: format(day, DATE_FORMAT),
    y: downloads
  }));
};

const mapCountData = (data, months) => {
  if (isEmpty(data) || (!isArray(data) && !isObject(data))) {
    return [];
  }

  // When data has only one package
  if (data.package) {
    return [
      {
        id: data.package,
        color: graphColors[0],
        data: mapDownload(data.downloads, months)
      }
    ];
  }

  let colorKey = 0;

  return map(data, (value, key) => {
    const color = graphColors[colorKey];
    colorKey += 1;

    return {
      id: key,
      color,
      data: mapDownload(value.downloads, months)
    };
  });
};

const fetchCount = (packages, months = 1) => {
  const [startDate, now] = [
    format(subMonths(new Date(), months), FULL_DATE_FORMAT),
    format(new Date(), FULL_DATE_FORMAT)
  ];
  const url = `${countEndpoint}${startDate}:${now}/${packages.join(',')}`;

  return axios
    .get(url)
    .then(res => mapCountData(res.data, months))
    .catch(err => {
      throw new Error(err);
    });
};

const fetchInfo = packages =>
  axios
    .post(packageEndpoint, packages)
    .then(res => mapPackageData(res.data))
    .catch(err => {
      throw new Error(err);
    });

module.exports = {
  mapPackageData,
  mapCountData,
  fetchCount,
  fetchInfo
};
