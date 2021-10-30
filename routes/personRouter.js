const express = require('express');
const personRouter = express.Router();
const personController = require('../controllers/personController')

personRouter.get('/', personController.getAll)

module.exports = personRouter;