const express = require('express');
const path = require('path');
const api = require('./routes/notes.js');

const PORT = process.env.PORT || 3001;
const app = express();

// middleware for parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET route for index.html
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);
// GET route for notes.html
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, function () {
    console.log(`App listening at http://localhost:${PORT}`);
});