var passport = require('passport');
var User = require('../models/user');
var config = require('../config');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

var jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};

// create jwt Strategy
var jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
	User.findById(payload.sub, function (err, user) {
		if (err) { return done(err, false); } // if search fails
		if (user) {
			done(null, user); // if user is found
		} else {
			done(null, false); // if user is not found
		}
	});
});

passport.use(jwtLogin);
