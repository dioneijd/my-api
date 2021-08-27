const express = require('express')
const routes  = express.Router()
const main = require('./pages-main')
const sf   = require('./pages-sf')

routes.get('/help/sf/groups', (req, res) => {
    const html = sf.PageOfGroups()
    return res.send(html)
})

routes.get('/help/sf/p', (req, res) => {
    const html = sf.PageOfPerson()
    return res.send(html)
})

routes.get('/help/sf', (req, res) => {
    const html = sf.PageOfSecretFriend()
    return res.send(html)
})

routes.get('/help', (req, res) => {
    const html = main.PageMain()
    return res.send(html)
})

// Redirecting
routes.get('/', (req, res) => {
    return res.redirect('/help')
})
routes.get('/help/sf/person', (req, res) => {
    return res.redirect('/help/sf/p')
})
routes.get('/help/sf/people', (req, res) => {
    return res.redirect('/help/sf/p')
})
routes.get('/help/sf/group', (req, res) => {
    return res.redirect('/help/sf/groups')
})

module.exports = routes