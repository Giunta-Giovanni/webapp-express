// importiamo mysql2 
const mysql = require('mysql2')
// inizializziamo la connessione al database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'BoolJohn741!',
    database: 'movie_db'
});
// gestiamo l'esito negativo o positivo della connessione
connection.connect((err) => {
    if (err) throw err;
    console.log('connection to mysql');
});

// esportiamo la connessione
module.exports = connection;
