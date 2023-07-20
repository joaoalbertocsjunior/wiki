'use static';

const joiner = (newData, dbData) => {
    let result = dbData || [];
    if (result.length) {
        result = Array.isArray(result[0].words) ? result[0].words : [];
    };

    result = [...newData, ...result];

    return result;
};

module.exports = joiner;