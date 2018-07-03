const database = require("./database-connection");

module.exports = {
    list() {
        return database('message').select()
    },
    read(id) {
        return database('message').select().where('id', id).first()
    },
    create(message) {
        return database('message').insert(message).returning('*').then(record => record[0])
    },
    update(id, message) {
        return database('message').where('id', id).update(message, '*').then(record => record[0])
    },
    delete(id) {
        return database('message').where('id', id).del()
    }
}