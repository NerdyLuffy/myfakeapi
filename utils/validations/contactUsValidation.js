const _ = require('lodash');

module.exports = contactUsValidation;

async function contactUsValidation(req, res, next) {
	let errors = [];
	if (req.body) {
		if (!_.isString(req.body.firstName)) {
			errors.push({
				reason: 'First name',
				errorMessage: 'First name is required.'
			});
		}
		if (!_.isString(req.body.lastName)) {
			errors.push({
				reason: 'Last name',
				errorMessage: 'Last name is required.'
			});
		}
		if (!_.isString(req.body.message)) {
			errors.push({
				reason: 'Message',
				errorMessage: 'Message is required.'
			});
		}
		if (!_.isNumber(req.body.contact)) {
			errors.push({
				reason: 'Contact',
				errorMessage: 'Please provide valid contact number.'
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
