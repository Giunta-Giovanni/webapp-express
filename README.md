# webapp-express

# Progettazione

## **Database**

Il progetto prevede la creazione di un **database relazionale** con **MySQL**, strutturato secondo i principi di:

- **normalizzazione**
- uso corretto dei **tipi di dato**
- definizione delle **relazioni tra tabelle**
  Sono state eseguite **query di test** per verificare la coerenza e la funzionalità del modello dati.

---

# Sviluppo

## **Backend**

Il backend è stato sviluppato con **Node.js** (runtime JavaScript) e il framework **Express**, e funge da interfaccia tra frontend e database.

L’obiettivo era creare una **REST API** che consentisse di eseguire le principali operazioni **CRUD** sui film.

La struttura è stata organizzata in:

- **Router**, per gestire le rotte in modo modulare
- **Controller**, per isolare la logica delle operazioni
- **Middleware personalizzati**:
  - gestione delle immagini (upload e salvataggio)
  - gestione degli errori 404 e 500
- **File .env** per proteggere le informazioni sensibili
- Utilizzo della libreria **CORS** per abilitare richieste da origini diverse (es. frontend in locale)
- Test delle rotte tramite **Postman**

---

# **Tecnologie lato Backend e DevTools:**

- **Database relazionale**: MySQL
- **Runtime**: Node.js
- **Linguaggio**: JavaScript
- **Framework**: Express
- **Librerie**: Axios (frontend), CORS, Multer
- **Dev tool**: Postman per testing delle rotte

# MILESTONE

## MILESTONE 1

1. Creiamo un database con MySQL Workbench
2. Creiamo una nuova applicazione Express
3. Colleghiamo l’app al db e verifichiamo che tutto funzioni
4. Prepariamo una rotta index per ottenere la lista dei film
5. Prepariamo una rotta show per ottenere i dettagli di un singolo film e le sue recensioni

### Bonus

- Inserire delle immagini nel progetto express e dunque nel db;
- Inserire i dati di connessione al database come variabili d’ambiente;
- Inserire le vostre API in controller;
- Inserire le vostre rotte in un router;
- Inserire un middleware per le rotte inesistenti;
- Inserire un middleware per la gestione errori;

## MILESTONE 2

Configuriamo l’app a ricevere chiamate dalla nostra applicazione React, installando e impostando il middleware CORS

## MILESTONE 3

Predisponiamo un’API per salvare nel database una nuova recensione legata ad un film
Testiamola su postman e verifichiamo che nel DB venga effettivamente inserita una nuova recensione

## MILESTONE 4

Predisponiamo un nuovo endpoint nell’API per salvare nel database un nuovo film
Testiamolo su postman e verifichiamo che nel DB venga effettivamente inserito un nuovo film
