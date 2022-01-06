const mongo = require('mongoose')

const GroupSchema = new mongo.Schema({
    name: String,
    eventDate: Date,
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