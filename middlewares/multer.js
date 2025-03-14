// cosa deve fare questo middleware?
// 1. controllare il payload della richiesta
// 2. cercare i file nei campi image e bg_image
// 3. salvarli utilizzando lo storage definito
// 4. rendere i file disponibili nell'oggetto req.files

// richiamiamo multer
const multer = require('multer');

// Definiamo lo storage comune
const storage = multer.diskStorage({
    // se i file sono nello stesso folder eseguire questo
    // destination: "./public/img/nome_cartella/",

    // se i file sono in folder diversi eseguire questo
    destination: (req, file, cb) => {
        // Differenziare le destinazioni in base al tipo di file
        if (file.fieldname === 'image') {
            // decisione null o destinazione immagini di copertina
            cb(null, './public/img/movies_cover/');
        } else if (file.fieldname === 'bg_image') {
            // decisione null o destinazione immagini di background
            cb(null, './public/img/bg_movies_cover/');
        }
    },
    // creazione del nome del file
    filename: (req, file, cb) => {
        // nome unico = data di oggi + il nome del file originale
        const uniqueName = `${Date.now()}-${file.originalname}`;
        // decisione null o nome generato
        cb(null, uniqueName);
    },
});

// Usa multer con lo storage definito
//  creiamo un istanza multer che gestisce il caricamento del file
const mediaFiles = multer({
    // richiamiamo tutto quello effettuato di sopra quindi destinazione e nome del file
    storage: storage
    // specifichiamo che multer deve gestire più campi
}).fields([
    // per l'immagine cover multer accettera solo un campo dato da maxCount
    { name: 'image', maxCount: 1 },
    // anche per l'immagine di backgroun multer accettera solo un campo dato da maxCount
    { name: 'bg_image', maxCount: 1 }
]);

// esportiamo mediaFiles
module.exports = mediaFiles;
