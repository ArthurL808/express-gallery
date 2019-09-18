const knex = require('./knex')
const bookshelf = require('bookshelf')(knex)
// bookshelf.model()
module.exports = bookshelf