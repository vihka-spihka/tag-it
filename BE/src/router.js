const fs = require('fs');
const path = require('path');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const combineResolvers = require('./resolvers/index');
const { formatError } = require('./error');

const appSchema = fs.readFileSync(path.join(__dirname, './../schema.graphql'), 'utf8');
const graphqlSchema = buildSchema(appSchema);

const connectGraphql = (app, dbConn) => {
	console.log('[GraphQL] Router setup...');

	app.use(
		'/api',
		graphqlHTTP({
			schema: graphqlSchema,
			rootValue: combineResolvers(dbConn),
			graphiql: true,
			customFormatErrorFn: (err) => formatError(err),
		}),
	);
};

module.exports = { graphqlSchema, connectGraphql };
