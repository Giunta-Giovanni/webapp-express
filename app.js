// importiamo express
const express = require('express');
// inizializziamo express
const app = express();
// salviamo la porta di utilizzo
const port = 3000;

// registro il body parser
app.use(express.json());

// colleghiamo l acartella con i file statici 
app.use(express.static('public'));

// importiamo la prima rotta: HOME
app.get('/', (req, res) => { res.json('questa è la rotta home') })

// avviamo il server
app.listen(port, () => {
    console.log(`la porta di utilizzo è la ${port}`)
})