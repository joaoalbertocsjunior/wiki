'use strict';

const iterationsLogger = (counter, entryPoint) => {
    console.log(`Total iterations: ${counter}. Working on word: ${entryPoint}...`);
};

module.exports = iterationsLogger;