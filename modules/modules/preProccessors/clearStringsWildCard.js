'use strict';

function clearStringsWildCard(pattern, strings) {
    const regex = new RegExp(pattern);
    const clearedStrings = [];
    for (const string of strings) {
        if (!regex.test(string)) {
            clearedStrings.push(string);
        }
    }
    return clearedStrings;
}

module.exports = clearStringsWildCard;