const { ERROR_MESSAGE } = require('./../error');

const Places = db => {
	return {
		getUserPlaces: ({ user_id }) => {
			return new Promise((res, rej) => {
				db.all(
					`SELECT * FROM PLACES WHERE user_id = ?;`,
					[ user_id ],
					function (err, rows) {
						if (err) {
							rej(err.message);
						}

						res(rows);
					});
			});
		},
		getPlacesFromCategory: ({ category_id }) => {
			return new Promise((res, rej) => {
				db.all(
					`SELECT * FROM PLACES WHERE place_id IN 
						(SELECT place_id FROM CATEGORIES_PLACES WHERE category_id = ?);`,
					[ category_id ],
					function (err, rows) {
						if (err) {
							rej(err.message);
						}

						res(rows);
					}
				);
			});
		},
		getPlaceInfo: ({ place_id }) => {
			return new Promise ((res, rej) => {
				db.get(
					`SELECT * FROM PLACES WHERE place_id = ?;`,
					[ place_id ],
					function (err, row) {
						if (err) {
							rej(err.message);
						}

						if (!row) {
							rej(ERROR_MESSAGE.NOT_FOUND);
						}

						res(row);
					}
				);
			});
		},
	};
};

module.exports = { Places };
