const fb = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils.js');

// GET route for retrieving notes
fb.get('/notes', (req, res) => {
    readFromFile('./db/db.json', 'utf8')
    .then(data => {
        console.log(data);
        return res.json(JSON.parse(data));
    })}
);

// POST route for submitting new note
fb.post('/notes', (req, res) => {
    console.log(req.body);
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        noteId: uuidv4(),
    };
    readAndAppend(newNote);
    res.json(newNote);
});

module.exports = fb;