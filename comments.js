// Create web server
// Create a POST route to handle comments
// Create a GET route to return comments
// Return comments as JSON

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const comments = [];

app.post('/comments', (req, res) => {
  const { comment } = req.body;
  comments.push(comment);
  res.status(201).send();
});

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
