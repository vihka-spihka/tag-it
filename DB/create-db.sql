/* Enable foreign keys */
PRAGMA foreign_keys = ON;

/* USERS table is a list of signed up users */
CREATE TABLE USERS (
	user_id INTEGER PRIMARY KEY NOT NULL,
	email TEXT NOT NULL UNIQUE,
	nickname TEXT NOT NULL UNIQUE,
	password TEXT NOT NULL
);

/* CATEGORIES table is a list of categories created by users */
CREATE TABLE CATEGORIES (
	category_id INTEGER PRIMARY KEY NOT NULL,
	nickname TEXT NOT NULL,
	user_id INTEGER NOT NULL,
	icon BLOB, /* NOT NULL */
	description TEXT,
	FOREIGN KEY (user_id) REFERENCES USERS (user_id) ON DELETE CASCADE
);

/* PLACES table is a list of places that were added to at least one of the existed categories */
CREATE TABLE PLACES (
	place_id INTEGER PRIMARY KEY NOT NULL,
	user_id INTEGER NOT NULL,
	nickname TEXT NOT NULL,
	coordinates TEXT NOT NULL,
	description TEXT,
	FOREIGN KEY (user_id) REFERENCES USERS (user_id) ON DELETE CASCADE
);

/* CATEGORIES_PLACES table represents the relationship between existing categories and places */
CREATE TABLE CATEGORIES_PLACES (
	category_id INTEGER NOT NULL,
	place_id INTEGER NOT NULL,
	FOREIGN KEY(category_id) REFERENCES CATEGORIES(category_id) ON DELETE CASCADE,
	FOREIGN KEY(place_id) REFERENCES PLACES(place_id)
);
