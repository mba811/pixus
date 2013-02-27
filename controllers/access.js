
exports.get = function (req, res, next) {
	if (req.query.token) {
		console.log('Token from https://www.google.com/accounts/AuthSubRequest :',
			req.query.token);
		req.session.access_token = req.query.token;
	}
	res.redirect('/');
};