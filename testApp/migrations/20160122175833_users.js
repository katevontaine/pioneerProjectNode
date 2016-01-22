
exports.up = function(knex, Promise) {
  Promise.all([
    knex.schema.createTable('users', function(table){
      table.increments();
      table.string('username');
      table.string('email');
      table.timestamps();
    })

    knex.schema.createTable('posts'), function(table){
        table.increments();
        table.string('title');
        table.text('body');
        table.timestamp();
    }
  ])
};

exports.down = function(knex, Promise) {
    promise.all([
      knex.schema.dropTable('users');
      knex.schema.dropTable('posts');
    ])
};
