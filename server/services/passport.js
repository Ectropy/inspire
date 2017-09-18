var passport = require('passport');
var User = require('../models/user');
var config = require('../config');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var LocalStrategy = require('passport-local');

// create local Strategy
// usernameField: 'email'
var localOptions = {usernameField: 'email'};
var localLogin = new LocalStrategy(localOptions, function (email, password, done) {
	User.findOne({email: email}, function (err, user) {
		// if there's an error in the search, return early with error object
		if (err) { return done(err); }
		// if it's not the same, it will return false and say they didn't match up
		if (!user) { return done(null, false); }
		// if same, it will call passport callback with user model
		return done(null, user);
	});
});

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
passport.use(localLogin);
