const express = require('express')
const routes = express.Router()


const groupController = require('./controllers/groupController')
const personController = require('./controllers/personController')


routes.get('/sf/groups', groupController.index)
routes.get('/sf/groups/:id', groupController.show)
routes.post('/sf/groups', groupController.store)
routes.put('/sf/groups', NotImplemented)
routes.delete('/sf/groups', NotImplemented)


routes.get('/sf/person', NotImplemented)
routes.get('/sf/person/:id', personController.show)
routes.post('/sf/person', NotImplemented)
routes.put('/sf/person/:id', NotImplemented)
routes.delete('/sf/person/:id', NotImplemented)


routes.get('/sf/p', NotImplemented)
routes.get('/sf/p/:id', personController.show)
routes.post('/sf/p', NotImplemented)
routes.put('/sf/p/:id', NotImplemented)
routes.delete('/sf/p/:id', NotImplemented)


function NotImplemented(req, res){
    return res.status(501).json({})
}

module.exports = routes