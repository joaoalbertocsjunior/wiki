'use strict';

function getLinks($) {
    const linkArray = [];
    $('a').each(function (i, element) {
        const link = $(element).attr('href');
        if (link) {
            linkArray.push(link);
        }
    });
    return linkArray;
};

module.exports = getLinks;