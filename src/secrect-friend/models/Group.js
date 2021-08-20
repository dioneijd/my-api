const mongo = require('mongoose')

const GroupSchema = new mongo.Schema({
    name: String,
    people: [
        {
            name: String,
            friend: String
        }
    ],
}, {
    timestamps: true,
})

module.exports = mongo.model('Groups', GroupSchema)