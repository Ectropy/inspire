var User = require('../models/user');
var jwt = require('jwt-simple');
var config = require('../config');

function createUserToken (user) {
	var timestamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = function (req, res, next) {
	// 1
	var email = req.body.email;
	var password = req.body.password;

	if (!email || !password) {
		return res.status(403).send({error: 'You must provide email and pw'});
	}

	User.findOne({email: email}, function (err, existingUser) {
		if (err) {
			return next(err);
		}// handle search error

		if (existingUser) {
			return res.status(403).send({error: 'Email is in use.'});
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
			res.json({token: createUserToken(user)}); // send user their jwt token.
		});
	});
};

exports.signin = function (req, res, next) {
	// User has already had their email and pw authed
	// we just need to give them a token
	res.send({token: createUserToken(req.user)});
};
