import Database from 'better-sqlite3'

const db = new Database('./database')

db.exec(`
    CREATE TABLE IF NOT EXISTS ingressos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        filme TEXT NOT NULL,
        assento TEXT NOT NULL
    )
`)

export default db