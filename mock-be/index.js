const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (_, res) => {
  res.send('Tag It!');
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
