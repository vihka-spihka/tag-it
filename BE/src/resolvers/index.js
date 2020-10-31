const { Users } = require('./users');
const { Categories } = require('./categories');
const { Places } = require('./places');

const combineResolvers = dbConn => ({
	getUserInfo: Users(dbConn).getUserInfo,
	createUser: Users(dbConn).createUser,
	editUser: Users(dbConn).editUser,
	removeUser: Users(dbConn).removeUser,

	getUserCategories: Categories(dbConn).getUserCategories,
	getCategoryInfo: Categories(dbConn).getCategoryInfo,

	getUserPlaces: Places(dbConn).getUserPlaces,
	getPlaceInfo: Places(dbConn).getPlaceInfo,
	getPlacesFromCategory: Places(dbConn).getPlacesFromCategory,
});

module.exports = combineResolvers;
