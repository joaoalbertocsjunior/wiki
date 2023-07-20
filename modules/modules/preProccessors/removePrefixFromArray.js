'use strict';

const removePrefixFromArray = (array, prefix) => {
    const regex = new RegExp(`^${prefix}`);
    return array.map(item => item.replace(regex, ''));
};

module.exports = removePrefixFromArray;