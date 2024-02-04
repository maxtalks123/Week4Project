import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    reaction TEXT,
    username TEXT,
    message TEXT
)`);

db.exec(`INSERT into reviews (reaction, username, message)
VALUES 
('Happy', 'Postman Pat', 'I really enjoyed my stay, I thought it was fantastic!'),
('Disgusting', 'Lala', 'Would not stay here again, absolutely disgusting. Couldve done with Noonoo to clean up!'),
('Awkward', 'Some legend called Steve', 'Yes mate it was alright to be fair')`);
