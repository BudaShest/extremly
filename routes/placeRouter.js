const express = require('express');
const placeRouter = express.Router();
const placeController = require('../controllers/placeController');

placeRouter.get('/', placeController.getAll)

module.exports = placeRouter;