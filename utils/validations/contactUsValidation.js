const _ = require('lodash');

module.exports = contactUsValidation;

async function contactUsValidation(req, res, next) {
	let errors = [];
	if (req.body) {
		if (!_.isString(req.body.firstName)) {
			errors.push({
				reason: 'firstName',
				errorMessage: 'firstName is required.'
			});
		}
		if (!_.isString(req.body.lastName)) {
			errors.push({
				reason: 'lastName',
				errorMessage: 'lastName is required.'
			});
		}
		if (!_.isString(req.body.message)) {
			errors.push({
				reason: 'message',
				errorMessage: 'Message is required.'
			});
		}
		if (!_.isNumber(req.body.contact)) {
			errors.push({
				reason: 'contact',
				errorMessage: 'Please provide valid Contact number.'
			});
		}
		if (errors.length > 0) {
			res.status(400).json({
				Errors: errors
			});
		} else {
			return next();
		}
	}
}
