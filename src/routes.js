const express = require('express')
const routes = express.Router()
const b = require('./api-helper/htmlBuilder')
const sf = require('./api-helper/docs-sf')



routes.get('/help/sf/groups', (req, res) => {
    let html = ''
    html  = b.SetPageHeader('MY API', 'SECRECT FRIENDS')
    html += sf.HelpOfGroups()

    return res.send(html)
})

routes.get('/help/sf/p', (req, res) => {
    let html = ''
    html  = b.SetPageHeader('MY API', 'SECRECT FRIENDS')
    html += sf.HelpOfPerson()

    return res.send(html)
})

routes.get('/help/sf', (req, res) => {
    let html = ''
    html  = b.SetPageHeader('MY API', 'SECRECT FRIENDS')
    html += sf.HelpOfGroups()
    html += '<br/><br/><br/>'    
    html += sf.HelpOfPerson()

    return res.send(html)
})

// Redirecting
routes.get('/', (req, res) =>{
    return res.redirect('/help/sf')
})
routes.get('/help', (req, res) =>{
    return res.redirect('/help/sf')
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