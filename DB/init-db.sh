#!/bin/sh

sqlite3 tag-it.db ".read create-db.sql"
sqlite3 tag-it.db ".read fill-db.sql"
