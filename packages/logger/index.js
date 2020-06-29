const { FORMAT_HTTP_HEADERS } = require('opentracing');

exports.Log = function (message) {
    console.log(`your message is ${message}`);
}