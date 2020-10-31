const { ERROR_MESSAGE } = require('./../error');

const Categories = db => {
	return {
		getUserCategories: ({ user_id }) => {
			return new Promise((res, rej) => {
				db.all(
					`SELECT * FROM CATEGORIES WHERE user_id = ?;`,
					[ user_id ],
					function(err, rows) {
						if (err) {
							rej(err.message);
						}

						res(rows);
					}
				);
			});
		},
		getCategoryInfo: ({ category_id }) => {
			return new Promise((res, rej) => {
				db.get(
					`SELECT * FROM CATEGORIES WHERE category_id = ?;`,
					[ category_id ],
					function(err, row) {
						if (err) {
							rej(err.message);
						}

						if (!row) {
							rej(new Error(ERROR_MESSAGE.NOT_FOUND))
						}

						res(row);
					}
				);
			});
		},
	};
};

module.exports = { Categories };
