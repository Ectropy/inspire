var Auth = require('./controllers/auth'); // include authorization controller
var User = require('./models/user'); // include user model

module.exports = function (app) {
	app.get('/', function (req, res, next) {
		res.send('HELLO HOMEPAGE');
	});
	app.get('/signup', function (req, res, next) {
		res.send('Hey folks, thanks for signing up!');
	});
	app.post('/signup', Auth.signup);
};
