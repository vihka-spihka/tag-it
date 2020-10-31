const ERROR_MESSAGE = {
	NOT_FOUND: 'NOT_FOUND',
	SERVER_ERROR: 'SERVER_ERROR',
};

const ERROR_TYPE = {
	NOT_FOUND: {
		code: 404,
		message: 'Not found',
	},
	SERVER_ERROR: {
		code: 500,
		message: 'Internal Server Error',
	},
};

const formatError = err => {
	let error = ERROR_TYPE[err.message];

	if (!error) {
		error = ERROR_TYPE.SERVER_ERROR;

		error = { // TODO: add extra error data only in DEV mode
			...error,
			message: error.message.concat(`: ${JSON.stringify(err)}`)
		};
	}
	return error;
}

module.exports = { ERROR_MESSAGE, formatError };
