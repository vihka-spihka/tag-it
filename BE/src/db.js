const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// TODO: move to env var
const DB_PATH = path.join(__dirname,'./../../DB/tag-it.db');

const dbConnectionFactory = () => {
	return new sqlite3.Database(DB_PATH, sqlite3.OPEN_READWRITE, error => {
		if (!!error) {
			return console.error('[SQlite] Error during opening:', error.message);
		}
	
		console.log('[SQlite] Successfully connected.');
	});
};

module.exports = { dbConnectionFactory };
