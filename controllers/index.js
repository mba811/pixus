var approot = process.env.PWD;
var googleAppId = process.env.GOOGLE_OAUTH.split(':');

var config = require(approot + '/config');
var Response = require(approot + '/lib/Response');
var util = require(approot + '/lib/util');

exports.get = function (req, res, next) {
	var token = req.session.access_token;
	res.render('index', {
		token: token,
		host: util.getHost(req)
	});
};
