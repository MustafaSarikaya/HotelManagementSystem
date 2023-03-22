import mariadb from 'mariadb'

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Password123!',
    database: 'HMS_database'
})

export default pool