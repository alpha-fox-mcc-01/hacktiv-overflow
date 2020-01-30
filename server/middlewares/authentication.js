const User = require('../models/User')
const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
	if (req.headers.access_token) {
		console.log('authenticating...', req.headers.access_token.substr(0, 10))
		const access_token = req.headers.access_token
		try {
			const authenticated_id = jwt.verify(access_token, process.env.JWTKEY)._id
			User.findOne({
				_id: authenticated_id
			})
				.then(result => {
					if (result) {
						console.log('authenticated');
						req.authenticated_id = authenticated_id
						req.authenticated_name = result.name
						next()
					} else {
						next({
							code: 403
						})
					}
				})
		} catch (error) {
			next(error)
		}
	} else {
		next({
			code: 403
		})
	}
}