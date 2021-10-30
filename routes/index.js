//Основной файл для определения роутинга приложения
const express = require('express');
const mainRouter = express.Router();

//Импорт дочерних роутов
const eventRouter = require('./eventRouter');
const placeRouter = require('./placeRouter');
const personRouter = require('./personRouter');

mainRouter.use('/event', eventRouter);
mainRouter.use('/place',placeRouter);
mainRouter.use('/person',personRouter);

module.exports = mainRouter;


