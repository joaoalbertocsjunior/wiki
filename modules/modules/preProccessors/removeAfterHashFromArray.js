'use strict';

function removeAfterHash(string) {
    return string.split('#')[0];
};

function removeAfterHashFromArray(array) {
    return array.map(removeAfterHash);
};

module.exports = removeAfterHashFromArray;