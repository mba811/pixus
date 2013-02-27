var approot = process.env.PWD;
var googleAppId = process.env.GOOGLE_OAUTH.split(':');

var url = require('url');

var GOAuth2 = require('google-oauth').OAuth2;

var config = require(approot + '/config');
var util = require(approot + '/lib/util');

var OAUTH_PICASA_URL = 'https://picasaweb.google.com/data';

var consumerKey = googleAppId[0];
var consumerSecret = googleAppId[1];

exports.get = function (req, res, next) {
	if (!req.session.access_token && !req.session.refresh_token) {
		var authUrl = url.format({
			protocol: req.protocol,
			host: util.getHost(req),
			pathname: util.getPath(__filename)
		});
		
		var oauth = new GOAuth2(consumerKey, consumerSecret, authUrl);
		
		if (!req.query.code) {
			oauth.getGoogleAuthorizeTokenURL( [OAUTH_PICASA_URL], function(err, redirecUrl) {
				if(err) return res.send(500,err);
				console.log('Auth token got:', ' Redirecting to ', authUrl);
				console.log(res.headers);
				return res.redirect(redirecUrl);
			});
		} else {
			oauth.getGoogleAccessToken(req.query, function(err, access_token, refresh_token) {
				if(err) return res.send(500,err);
				console.log('Access token got: ', access_token);
				req.session.access_token = access_token;
				req.session.refresh_token = refresh_token;
				return res.redirect('/');
			});
		}
	} else {
		return res.redirect('/');
	}
};
