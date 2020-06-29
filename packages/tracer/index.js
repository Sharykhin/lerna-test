const middleware = require('@siarhei/middleware');

exports.trace = function (id) {
    console.log(`Traced ${id} token`);
    middleware.run();
}