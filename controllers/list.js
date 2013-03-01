var approot = process.env.PWD;

var config = require(approot + '/config');
var util = require(approot + '/lib/util');
var https = require('https');

var PICASA_ALBUMS_URL = 'https://picasaweb.google.com/data/feed/api/user/default';

exports.get = function (req, res, next) {
	function callback (err, response, rst) {
		if (err) {
			console.log(err);
			
		}
		res.send(rst.join(''));
	}
	
	var token = req.session.access_token;
	
	if (token) {
		var result = [];
		var proReq = https.request({
			method: 'GET',
			host: 'picasaweb.google.com',
			path: '/data/feed/api/user/mytharcher?kind=album&alt=json',
			headers: {
				Authorization: 'OAuth ' + token
			}
		}, function (proRes) {
			proRes.on("data", function (chunk) {
				result.push(chunk);
			});
			proRes.on("close", function (err) {
				callback( err, proRes, result );
			});
			proRes.addListener("end", function () {
				callback( null, proRes, result );
			});
		});
		proReq.end();
		
		proReq.on('error', function (err) {
			console.log(err);
			res.send(500, err);
		});
	} else {
		res.redirect('/');
	}
};
