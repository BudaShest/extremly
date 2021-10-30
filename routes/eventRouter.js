const express = require('express')
const eventRouter = express.Router()
const eventController = require('../controllers/eventController');

//Сопоставление маршутов и методов для

eventRouter.get('/',eventController.getAll)
eventRouter.post('/', eventController.create)

module.exports = eventRouter