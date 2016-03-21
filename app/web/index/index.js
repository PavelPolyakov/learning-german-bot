'use strict';

const debug = require('debug')('web/index');
const fs = require('fs');

/**
 *
 * @param {{plugins : *, preferences : *}} server
 * @param options
 * @param next
 */

exports.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            return reply({hello:1});
        }
    });

    next();
};

exports.register.attributes = {
    pkg: require('./package.json')
};