const path = require('path');
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 3000;

const DB_PATH = path.join(__dirname,'../DB/tag-it.db');

const db = new sqlite3.Database(DB_PATH, sqlite3.OPEN_READWRITE, error => {
  if (!!error) {
    return console.error('Error during opening the DB:', error.message);
  }

  console.log('Successfully connected to the DB.');
});

app.get('/', (_, res) => {
  res.send('Tag It!');
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

db.close(error => {
  if (!!error) {
    return console.error('Error during closing the DB:', error.message);
  }

  console.log('DB connection closed.');
});
