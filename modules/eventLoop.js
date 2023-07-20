'use strict';

const entryPointFunction = require(`./entryPointFunction.js`);

const { loggers } = require('./modules/index.js');

const { iterationsLogger } = loggers;

const eventLoop = async (entryPoint, totalCalls, apiUrl, interval = 6000 /**16400**/) => {
    let count = 0;
    const timer = setInterval(() => {
        iterationsLogger(count, entryPoint);
        entryPointFunction(entryPoint, apiUrl)
            .then((result) => {
                if (result.newEntryPoint === null) {
                    clearInterval(timer);
                    console.log("Event loop stopped. 'entryPoint' is null.");
                    return;
                };
                entryPoint = result.newEntryPoint;
            })
            .catch((err) => {
                console.log(err);
            });
        count++;
        if (count === totalCalls + 1) {
            clearInterval(timer);
        }
    }, interval);
};

module.exports = eventLoop;