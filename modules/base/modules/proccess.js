'use strict';

const base = './base/index.js';

const basePath = '../../modules/index.js';

const { preProccessors, shared } = require(basePath);

const { markVisited } = preProccessors;
const { joiner, sortFetch, compress, updateEntryPoint } = shared;

const cleanLinks = require('./cleanLinks.js');

const proccess = (oldData, newData, entryPoint) => {
    const baseURL = '/wiki/';
    let data = [...newData.links, ...oldData.links];//joiner(newData.links, oldData.links);
    data = [`${baseURL}${entryPoint}`, ...data];
    data = cleanLinks(data);
    data = sortFetch(data);
    const alreadyVisited = markVisited(data, entryPoint);
    data = {
        entryPoint: entryPoint,
        data: alreadyVisited,
        text: newData.text,
        compressed: compress.compress(newData.text).lz,
        newEntryPoint: updateEntryPoint(alreadyVisited)
    };
    return data;
}

module.exports = proccess;