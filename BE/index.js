const express = require('express');
const app = express();
const { dbConnectionFactory } = require('./src/db');
const { connectGraphql } = require('./src/router');

const PORT = 3000;
const dbConn = dbConnectionFactory();

connectGraphql(app, dbConn);

app.listen(PORT, () => {
	console.log(`Listening at http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
	if (!!dbConn) {
		dbConn.close(error => {
			if (!!error) {
				return console.error('[SQlite]: Error during closing the DB: ', error.message);
			}

			console.log('\t[SQlite]: Connection closed.');
			process.exit(0);
		});
	}
});

module.exports = { app, dbConn };
