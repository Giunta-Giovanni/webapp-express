function setImagePath(req, res, next) {
    // creiamo il path assoluto della Immagine
    req.imagePath = `${req.protocol}://${req.get('host')}/img/movies_cover/`;
    next();
}

module.exports = setImagePath;