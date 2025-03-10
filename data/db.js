// importiamo mysql2 
const mysql = require('mysql2')
// inizializziamo la connessione al database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
// gestiamo l'esito negativo o positivo della connessione
connection.connect((err) => {
    if (err) throw err;
    console.log('connection to mysql');
});

// esportiamo la connessione
module.exports = connection;
