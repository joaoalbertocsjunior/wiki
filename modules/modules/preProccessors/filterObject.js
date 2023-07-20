'use strict';

const filterObject = (dataArray) => {
    return dataArray.filter(obj => typeof obj.word === 'string' && typeof obj.visited === 'boolean');
};

module.exports = filterObject;