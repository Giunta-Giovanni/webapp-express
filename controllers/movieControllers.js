//Importiamo la connessione mysql del database movie
const connection = require('../data/db');

//funzioni crud
// index
function index(req, res) {
    // prepariamo la query
    const moviesSql = `
        SELECT*
        FROM movies
    `
    connection.query(moviesSql, (err, moviesResults) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });

        // versione mappata del risultato
        const movies = moviesResults.map(movie => {
            return {
                ...movie,
                image: req.imagePath + movie.image
            }
        })
        res.json(movies)
    })
}

// show
function show(req, res) {
    // salviamo l'id dalla richiesta
    const { id } = req.params
    // salviamo la query sql del singolo movie
    const movieSql = `
                    SELECT*
                    FROM movies
                    WHERE id = ?;
                `;
    // salviamo la query sql delle reviews
    const reviewsSql = `
                SELECT*
                FROM reviews
                WHERE movie_id = ?;
                `;

    // eseguiamo la query
    connection.query(movieSql, [id], (err, movieResults) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })
        if (movieResults.length === 0) return res.status(404).json({ error: 'film non trovato' });
        // recuperiamo il film
        const movie = movieResults[0];

        connection.query(reviewsSql, [id], (err, reviewsResults) => {
            if (err) return res.status(500).json({ error: 'Database query failed' })
            if (reviewsResults.length === 0) return res.status(404).json({ error: 'non ci sono reviews' });
            // inseriamo le reviews nel film
            movie.reviews = reviewsResults;
            res.json(movie);
        })
    })

}
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