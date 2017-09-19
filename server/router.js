var Auth = require('./controllers/auth'); // include authorization controller
var passportService = require('./services/passport'); // our service that uses passport.
var passport = require('passport'); // passport itself
var User = require('./models/user'); // include user model
var requireAuth = passport.authenticate('jwt', {session: false}); // routes with this require authentication to see
var requireSignin = passport.authenticate('local', {session: false}); // routes with this require local auth

module.exports = function (app) {
	app.get('/', requireAuth, function (req, res, next) { // a route that requires authentication
		res.send('HELLO HOMEPAGE');
	});
	app.get('/signup', function (req, res, next) {
		res.send('Hey folks, thanks for signing up!');
	});
	app.post('/signup', Auth.signup);
	app.post('/signin', requireSignin, Auth.signin);
};
