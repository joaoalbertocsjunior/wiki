'use strict';

const markVisited = (wordsArray, pageTitle) => {
    let result = [];
    wordsArray.forEach((word) => {
        let visited = false;
        //if (word.toLowerCase() === pageTitle.toLowerCase()) {
        if (word === pageTitle) {
            visited = true;
        }
        result = [...result, { word: word, visited: word.visited || visited ? true : false }]
    });
    return result;
};

module.exports = markVisited;

