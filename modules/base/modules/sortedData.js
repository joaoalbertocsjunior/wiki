'use strict';

const { shared } = require('../../modules/index.js');

const { joiner, sortFetch } = shared;

const sortedData = (entryPoint, data, value) => {
    const save = {
        word: entryPoint,
        data: data.compressed
    };
    const merged = joiner([save], value);
    const sorted = sortFetch(merged);

    return sorted;
};

module.exports = sortedData;