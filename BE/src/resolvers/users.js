const { ERROR_MESSAGE } = require('./../error');

const Users = db => {
	return {
		getUserInfo: ({ user_id }) => {
			return new Promise((res, rej) => {
				db.get(
					`SELECT email, nickname FROM USERS WHERE user_id = ?;`,
					[ user_id ],
					function(err, row) {
						if (err) {
							rej(err.message);
						}

						if (!row) {
							rej(new Error(ERROR_MESSAGE.NOT_FOUND));
						}

						res(row);
					}
				);
			});
		},
		createUser: ({ user }) => {
			return new Promise((res, rej) => {
				db.run(
					`INSERT INTO USERS (email, nickname, password) VALUES (?, ?, ?);`,
					[ user.email, user.nickname, user.password ],
					function(err) {
						if (err) {
							rej(err.message);
						}

						res({ ...user, ...{ user_id: this.lastID } });
					}
				);
			});
		},
		editUser: ({ user }) => {
			const { user_id, nickname, email, password } = user;
			return new Promise((res, rej) => {
				db.all(
					`SELECT user_id FROM USERS WHERE user_id = ?;`,
					[ user_id ],
					function (err, rows) {
						if (err || rows.length === 0) {
							rej(new Error(ERROR_MESSAGE.NOT_FOUND));
						}

						db.serialize(() => {
							if (!!nickname) {
								db.run(
									`UPDATE USERS SET nickname = ? WHERE user_id = ?;`,
									[ nickname, user_id ],
									function (err) {
										if (err) {
											rej(err.message);
										}
									}
								);
							}
							
							if (!!email) {
								db.run(
									`UPDATE USERS SET email = ? WHERE user_id = ?;`,
									[ email, user_id ],
									function (err) {
		
										if (err) {
											rej(err.message);
										}
									}
								);
							}
		
							if (!!password) {
								db.run(
									`UPDATE USERS SET password = ? WHERE user_id = ?;`,
									[ password, user_id ],
									function (err) {
										if (err) {
											rej(err.message);
										}
									}
								);
							}
						});
		
						res({ ... user });
						});
			});
		},
		removeUser: ({ user_id }) => {
			return new Promise ((res, rej) => {
					db.get(
						`SELECT * FROM USERS WHERE user_id = ?`,
						[ user_id ],
						function (err, row) {
							if (err || !row) {
								rej(new Error(ERROR_MESSAGE.NOT_FOUND));
							}
							
							db.run(
								`DELETE FROM USERS WHERE user_id = ?`,
								[ user_id ],
								function (err) {
									if (err) {
										rej(err.message);
									}
									
									res({
										code: 200,
										message: 'OK',
									});
								}
							);
						}
					);
			});
		},
	};
};

module.exports = { Users };
