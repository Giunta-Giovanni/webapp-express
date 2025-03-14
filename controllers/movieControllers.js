//Importiamo la connessione mysql del database movie
const { status } = require('init');
const connection = require('../data/db');

//funzioni crud
// index -> Lista dei Film
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
                image: req.imagePath + movie.image,
                bg_image: req.bgImagePath + movie.bg_image
            }
        })
        res.json(movies)
    })
}

// show -> dati del singolo film 
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

            // aggiungiamo il valore path img da middleware
            movie.image = req.imagePath + movie.image
            movie.bg_image = req.bgImagePath + movie.bg_image
            res.json(movie);
        })
    })

}

function store(req, res) {
    // salviamo i dati di richiesta
    const { title, director, genre, release_year, abstract } = req.body;

    // assegnamo il nome del file
    const coverImageName =
        // se req.file = image esegui la condizione
        req.files['image'] ?
            // il nome del file è uguale a filename che si trova dentro l'oggetto req.file con nome image che ha come valore un array con dentro l'oggetto che avrà indice = 0
            // da questo ricavami il file name
            req.files['image'][0].filename
            // se non lo trovi
            :
            // allora coverImageName è = a null
            null;

    const bgImageName = req.files['bg_image'] ? req.files['bg_image'][0].filename : null;

    // Creiamo la query di insert
    const sql = `
    INSERT INTO movies (title, director, genre, release_year, abstract,image, bg_image) 
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    // Eseguiamo la query
    connection.query(sql, [title, director, genre, release_year, abstract, coverImageName, bgImageName], (err, result) => {
        console.log(err)
        if (err) return res.status(500).json({ error: 'Database query failed' })
        res.status(201);
        res.json({ status: "succes", message: 'movie added' })
    })
}

// posts new review
function storeReview(req, res) {
    // ricaviamoci l'id
    const { id } = req.params;

    // le altre info dal body
    const { text, name, vote } = req.body

    // creiamo la query di richiesta
    const newReviewSql = `
    INSERT INTO reviews (text, name, vote, movie_id)
    VALUES (?,?,?,?)
    `;

    // eseguiamo la query
    connection.query(newReviewSql, [text, name, vote, id], (err, result) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })
        // stato di conferma con restituzione un JSON con l'ID della recensione appena aggiunta
        res.status(201);
        res.json({ message: 'Review added', id: result.insertId })
    })
}
//update
function update(req, res) { { res.json('questa è la rotta update') } }
//modify
function modify(req, res) { { res.json('questa è la rotta modify') } }
// destroy
function destroy(req, res) { { res.json('questa è la rotta delete') } }

// esportiamo i controllers delle operazioni crud
module.exports = { index, show, store, storeReview, update, modify, destroy }