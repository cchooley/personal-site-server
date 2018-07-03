exports.up = function (knex, Promise) {
    return knex.schema.createTable('message', (table) => {
        table.increments('id'),
        table.text('name'),
        table.text('email'),
        table.text('message')
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('message')
};