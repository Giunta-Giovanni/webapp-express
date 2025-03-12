function setImagePath(req, res, next) {
    // creiamo il path assoluto della Immagine
    req.imagePath = `${req.protocol}://${req.get('host')}/img/movies_cover/`;
    next();
}

function setBgImagePath(req, res, next) {
    req.bgImagePath = `${req.protocol}://${req.get('host')}/img/bg_movies_cover/`;
    next();
}

module.exports = { setImagePath, setBgImagePath };