var pg = require('pg');
var knex = require('knex');

module.exports = {
  development:{
    client:"postgres",
    connection:{
      database:"tg_dev"
    }
  }

}
