'use strict';

const getUniques = (objectToFilter) => {
    const uniqueWordsArray = [];
    const visitedSet = new Set();
    const falseCopyArray = [];

    objectToFilter.forEach(obj => {
        if (obj.visited === true) {
            if (!visitedSet.has(obj.word)) {
                visitedSet.add(obj.word);
                uniqueWordsArray.push(obj);
            }
        } else {
            falseCopyArray.push({ word: obj.word, visited: false });
        }
    });

    const falseCopySet = new Set();
    falseCopyArray.forEach(obj => {
        if (!visitedSet.has(obj.word) && !falseCopySet.has(obj.word)) {
            falseCopySet.add(obj.word);
            uniqueWordsArray.push(obj);
        }
    });

    return uniqueWordsArray;
};

module.exports = getUniques;