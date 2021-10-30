const express = require('express');
require('dotenv').config()
const sequelize = require('./db/config');
const models = require('./models/model');
const mainRouter = require('./routes/index');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const bodyParser = require('body-parser');
const diskStorage = require('./utils/storage/config');

const PORT = process.env.PORT || 3030;
const app = express()
const upload = multer({storage: diskStorage}).single('image-data')

app.use(cors());
// app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(upload);

//Тестовый метод
app.post('/upload', (req, res)=>{
    console.log(req.file);
    console.log(req.file.mimetype.split('/')[1])
})

app.use('/api', mainRouter);

const start = async ()=>{
    try{
        await sequelize.authenticate()
        await sequelize.sync({force:true})
        app.listen(PORT, ()=>console.log('Сервер запущен на порту: ' + PORT ))
    }catch (e){
        console.error('Ошибка подключения к БД' + e)
    }
}

start();