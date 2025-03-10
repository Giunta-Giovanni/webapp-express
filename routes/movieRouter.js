// importiamo express
const express = require('express');
// importiamo express router
const router = express.Router();

// Rotte CRUD per la gestione dei dati del db:movies
// index
router.get('/', (req, res) => { res.json('questa è la rotta index') });
// show
router.get('/:id', (req, res) => { res.json('questa è la rotta show') });
// store
router.post('/', (req, res) => { res.json('questa è la rotta store') });
// update
router.put('/:id', (req, res) => { res.json('questa è la rotta update') })
// modify
router.patch('/:id', (req, res) => { res.json('questa è la rotta modify') })
// destroy
router.delete('/:id', (req, res) => { res.json('questa è la rotta delete') });

// ESPORTIAMO I MODULI DEI ROUTER
module.exports = router;