const mongo = require('mongoose')
const Group = require('../models/Group')


const Groups = {
    async index (req, res) {
        const groups = await Group.find()
        const groupsIds = groups.map( grp => grp._id)
        return res.json(groupsIds)
    },

    async show (req, res) {
        let group = await Group.findById(req.params.id)

        if (!group) {
            group = { errorMsg: `Group id ${req.params.id} not found` }
        }
        return res.json(group)
    },

    async store (req, res) {
        let grp = req.body

        if (grp.name == "" || grp.name == undefined)
            return res.status(400).json({error: "041", errorMsg: 'Its missing the group name'})

        if (grp.people == undefined)
            return res.status(400).json({error: "042", errorMsg: 'Its missing the people'})
        
        if (grp.people.length < 3) 
            return res.status(400).json({error: "043", errorMsg: 'It should have at least 3 people to create a group'})        

        if (await grp.people.every(async (pToChk, index) => grp.people.findIndex(async person => person.name == pToChk.name) == index ))
            return res.status(400).json({error: "044", errorMsg: 'People node has duplicate names, it not allowed.'})

            
        let peopleShuffle = JSON.parse(JSON.stringify(grp.people))
        let hasProblem = false

        do {
            hasProblem = false

            for (let i = peopleShuffle.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1))
                const temp = peopleShuffle[i]
                peopleShuffle[i] = peopleShuffle[j]
                peopleShuffle[j] = temp
            }

            grp.people.forEach((person, index) => {
                const friend = peopleShuffle[index]
                person.name == friend.name ? hasProblem = true : person.friend = friend.name                
            })

        } while (hasProblem)

        const groupStored = await Group.create(grp)

        if (groupStored) return res.status(201).json(groupStored)

        return res.status(500).json({error: "051", errorMsg: "Error to create group"})

    },

    async update (req, res) {
        return res.send('To be implemented')
    },

    async destroy (req, res) {
        return res.send('To be implemented')
    }


}

module.exports = Groups