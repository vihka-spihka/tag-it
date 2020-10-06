/* Filling USERS table with 2 test users */
INSERT INTO USERS (email, nickname, password)
VALUES
	('koko@tag.it', 'koko', 'passw0rd'),
	('winston@tag.it', 'winston', 'p@ssword');

/* Filling CATEGORIES table with 5 test categories (2 for the first test user, the rest for the second one) */
INSERT INTO CATEGORIES (user_id, nickname, description)
VALUES
	(1, 'Health Care', 'A list of my Health Care team'),
	(1, 'Relatives', 'Family addresses'),
	(2, 'WOW', 'Must visit again!'),
	(2, 'Fishing Places', 'Favourite fishing places'),
	(2, 'Food & Drinks', 'Verified places with tasty food and good drinks');

/* Filling PLACES table with 12 test places */
INSERT INTO PLACES (user_id, nickname, coordinates, description)
VALUES
	(1, 'PCP', '37.341035, -121.910860', 'MD Greg House'),
	(1, 'Psychiatrist', '37.351946, -121.975385', 'MD Cal Lightman, suite 333'),
	(1, 'Parents', '37.341719, -121.990747', NULL),
	(1, 'Sister', '37.303990, -121.942131', 'Apt. 0023'),
	(1, 'Cousin Ronald', '37.228937, -121.986938', NULL),
	(2, 'Cool waterfalls', '37.226331, -122.105902', NULL),
	(2, 'Nice sunrise', '37.238964, -122.071791', 'Checked at 5am'),
	(2, 'Sea bass', '37.729121, -122.095421', 'Late October. Canada Goose everywhere!'),
	(2, 'Trout', '37.735746, -122.114566', 'Mid Jul'),
	(2, 'Catfish', '37.735203, -122.117946', 'Early May'),
	(2, 'Just Breakfast', '37.290735, -121.848987', 'Unlimited coffee, cool waffles'),
	(2, 'The Cheescake Factory', '37.251919, -121.861693', 'Om-nom-nom, Pumpkin Cheesecakes starting from September');

/* Filling CATEGORIES_PLACES table with 13 test connections between Categories and Places for both test users */
INSERT INTO CATEGORIES_PLACES (category_id, place_id)
VALUES
	(1, 1),
	(1, 2),
	(2, 3),
	(2, 4),
	(2, 5),
	(3, 6),
	(3, 7),
	(4, 7),
	(4, 8),
	(4, 9),
	(4, 10),
	(5, 11),
	(5, 12);
