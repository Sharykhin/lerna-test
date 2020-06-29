const { FORMAT_HTTP_HEADERS } = require('opentracing');

exports.trace = function (id) {
    console.log(`Traced ${id} token: ${FORMAT_HTTP_HEADERS}`);
}