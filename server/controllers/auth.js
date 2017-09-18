var User = require('../models/user');

exports.signup = function (req, res, next) {
	// 1
	var email = req.body.email;
	var password = req.body.password;
	// 2
	User.findOne({email: email}, function (err, existingUser) {
		if (err) {
			return next(err);
		}// handle search error

		if (existingUser) {
			return res.status(418).send('Email is in use.');
			//
		}

		// 3
		var user = new User({
			email: email,
			password: password
		});

		// To save the record to the db.
		user.save(function (err) {
			if (err) { return next(err); }
			res.json({success: true});
		});
	});
};
