'use static';

const filterUniques = (array) => {
    return [...new Set(array)];
};

module.exports = filterUniques;