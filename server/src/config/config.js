module.exports = {
  db: {
    database: process.env.DB_NAME || 'tabbucket',
    user: process.env.DB_USER || 'tabbucket',
    password: process.env.DB_PASS || 'tabbucket',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './database.sqlite'
    }
  }
}