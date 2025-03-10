// importiamo express
const express = require('express');
// importiamo express router
const router = express.Router();
// importiamo i controllers
const controllers = require('../controllers/movieControllers')

// destrutturiamo i controllers
const { index, show, store, update, modify, destroy } = controllers

// Rotte CRUD per la gestione dei dati del db:movies
// index
router.get('/', index);
// show
router.get('/:id', show);
// store
router.post('/', store);
// update
router.put('/:id', update)
// modify
router.patch('/:id', modify)
// destroy
router.delete('/:id', destroy);

// ESPORTIAMO I MODULI DEI ROUTER
module.exports = router;