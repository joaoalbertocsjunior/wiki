'use strict';

const startsWithPrefix = (item, prefix) => {
    return item.startsWith(prefix);
}

const filterArrayByPrefix = (array, prefix) => {
    return array.filter(item => startsWithPrefix(item, prefix));
}

module.exports = filterArrayByPrefix;