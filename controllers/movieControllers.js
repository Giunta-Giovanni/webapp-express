//Importiamo la connessione mysql del database movie
const connection = require('../data/db');

//funzioni crud
// index
function index(req, res) {
    // prepariamo la query
    const postSql = `
        SELECT*
        FROM movies
    `
    connection.query(postSql, (err, moviesResults) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(moviesResults)
    })
}
// show
function show(req, res) { { res.json('questa è la rotta show') } }
// posts
function store(req, res) { res.json('questa è la rotta store') }
//update
function update(req, res) { { res.json('questa è la rotta update') } }
//modify
function modify(req, res) { { res.json('questa è la rotta modify') } }
// destroy
function destroy(req, res) { { res.json('questa è la rotta delete') } }

// esportiamo i controllers delle operazioni crud
module.exports = { index, show, store, update, modify, destroy }