// importiamo express
const express = require('express');
// inizializziamo express
const app = express();
// salviamo la porta di utilizzo
const port = process.env.PORT;
// importiamo il router con le relative rotte
const moviesRouter = require('./routes/movieRouter');

// MIDDLEWARES
// import middleware path immagine
const imagePathMiddleware = require('./middlewares/imagePath')
// import middleware errore 500
const errorsHandler = require('./middlewares/errorsHandler_mws');
// import middleware errore 404
const endPointNotFound = require('./middlewares/notFound_mws')

// Importiamo CORS
const cors = require('cors')

// abilitiamo CORS per la richiesta specifica
app.use(cors({ origin: process.env.FE_APP }))

// colleghiamo l acartella con i file statici 
app.use(express.static('public'));

// registro il body parser
app.use(express.json());

// gestiamo i percorsi delle immagini
app.use(imagePathMiddleware)

// importiamo la prima rotta: HOME
app.get('/api/', (req, res) => { res.json('questa è la rotta home') })

// importiamo le rotte per le operazioni CRUD dei movies
app.use('/api/movies/', moviesRouter)

// registro errore 404
app.use(endPointNotFound);

// registro errore 500
app.use(errorsHandler);

// avviamo il server
app.listen(port, () => {
    console.log(`la porta di utilizzo è la ${port}`)
})