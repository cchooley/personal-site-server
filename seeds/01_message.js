
exports.seed = function (knex, Promise) {
  return knex("message").del().then(() => {
    return knex("message").insert([{
      id: 1,
      name: 'Conor Hooley',
      email: 'cchooley@gmail.com',
      message: 'Why are you talking to yourself?'
    }, {
      id: 2,
      name: 'Tony Stark',
      email: 'ironman@stark.com',
      message: 'I got Spider-Man killed'
    }]);
  }).then(() => {
    return knex.raw("ALTER SEQUENCE message_id_seq RESTART WITH 3;");
  });
};