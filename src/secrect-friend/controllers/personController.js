const mongo = require('mongoose')
const Group = require('../models/Group')

const Persons = {
    async index (req, res) {
        return res.send('To be implemented')
    },

    async show (req, res) {        
        const personId = req.params.id
        let group = await Group.find({"people._id": personId})
        group = group[0]
        let person = group.people.find(person => person._id == personId)

        person = {
            _id: person._id,
            name: person.name,
            friend: person.friend,
            grpName: group.name
        }

        if (!person) {
            person = { error: `Person id ${req.params.id} not found` }
        }
        return res.json(person)
    },

    async store (req, res) {
        return res.send('To be implemented')
    },

    async update (req, res) {
        return res.send('To be implemented')
    },

    async destroy (req, res) {
        return res.send('To be implemented')
    }


}

module.exports = Persons