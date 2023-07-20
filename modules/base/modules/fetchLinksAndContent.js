const fetch = require('node-fetch');
const cheerio = require('cheerio');

const { getLinks } = require('../../modules/index.js').preProccessors;

async function fetchLinksAndContent(pageTitle, url) {
    const params = new URLSearchParams({
        action: 'parse',
        page: pageTitle,
        format: 'json',
        origin: '*',
        redirects: 'false'
    });

    const response = await fetch(`${url}?${params}`);
    const data = await response.json();

    // Get the HTML text
    const htmlContent = data.parse.text['*'];

    // Load the HTML content into cheerio
    const $ = cheerio.load(htmlContent);

    // Remove script and style elements
    //$('script').remove();
    //$('style').remove();

    // Retrieve only text content inside paragraph tags
    let textContent = '';
    $('p').each(function (i, element) {
        textContent += $(element).text() + '\n';
    });

    //let arrayData;
    let linkArray;

    try {
        //arrayData = normalizeFetch(textContent, pageTitle);
        linkArray = getLinks($);
    } catch (err) {
        throw err;
    }

    //const result = {
    //    array: arrayData,
    //    text: textData,
    //    links: linkArray
    //};

    const result = {
        text: textContent,
        links: linkArray
    };

    return result;
}

module.exports = fetchLinksAndContent;

//'Negative_mass'
//'Avocado'
//'Javascript'

