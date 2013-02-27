var approot = process.env.PWD;

var path = require('path');
var crypto = require('crypto');

var config = require(approot + '/config');
var util = require(approot + '/lib/util');

exports.sha1 = function (str) {
	return crypto.createHash('sha1').update(str).digest('hex');
};

exports.getHost = function (req) {
	var port = process.env.PORT;
	return req.host + (port == 80 ? '' : ':' + port);
};

exports.getPath = function (p) {
	return (p.replace(path.join(approot, config.path.controllers), '')
			.replace(/\.js$/, ''));
};