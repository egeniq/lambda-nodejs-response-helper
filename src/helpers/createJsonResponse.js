'use strict';

/**
 * Creates an AWS Lambda compatible JSON response object
 *
 * @param {number} statusCode
 * @param {?object} data
 * @param {?object} headers
 * @return {{body: string, headers: ?object, statusCode: number}}
 */
module.exports = function createJsonResponse(statusCode, data, headers) {
    const response = {
        statusCode: statusCode,
        body: JSON.stringify(data)
    };

    if (typeof headers !== 'undefined') {
        response.headers = headers;
    } else {
        response.headers = {};
    }

    if (typeof response.headers.Accept === 'undefined') {
        response.headers.Accept = 'application/json';
    }

    return response;
};
