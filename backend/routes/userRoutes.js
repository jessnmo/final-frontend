import express from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

const userInfoValidation = (action) => {
	switch (action) {
		case 'register':
			return [
				body('username', 'Username filed is mandatory to fulfill')
					.exists()
					.isLength({ min: 1 }),
				body('email', 'Email filed mandatory to fulfill')
					.exists()
					.isEmail()
					.isLength({ min: 1 }),
				body('password', 'Password must be 8 characters or longer')
					.exists()
					.isLength({ min: 8 }),
			];

			break;

		default:
			break;
	}
};

router.post('/register', userInfoValidation('register'), (req, res) => {
	const user = { name: 'test' };
	const errors = validationResult(req);
	console.log(errors); //if list of errors is not empty then throw errors
	if (!errors.isEmpty()) {
		return res.status(401).send(errors.array());
	}
	res.send(user);
});

export default router;
