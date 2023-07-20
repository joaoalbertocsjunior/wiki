'use strict';

const updateEntryPoint = (object) => {
    let counter = 0;
    let length = object.length;
    let entryPoint = null;
    while (counter < length) {
        if (!object[counter].visited) {
            entryPoint = object[counter].word;
            break;
        }
        ++counter;
    }
    return entryPoint;
};

module.exports = updateEntryPoint;