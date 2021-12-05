//В этом файле находится конфиг для загрузки изображений
const multer = require('multer');
const {uid} = require('uid/single');

//Корректные mime-типы
const correctMimeTypes = ['image/gif','image/jpeg','image/pjpeg','image/png'];

//TODO фильтрацию на типы контента!

const imageStorageConfig = multer.diskStorage({

    destination: function (req,file,cb){
        cb(null, 'static/img/uploads')
    },
    filename: function (req, file, cb){

        if (correctMimeTypes.includes(file.mimetype)){
            cb(null, file.filename + "-" + uid() + '.' + file.mimetype.split('/')[1])
        }

    }
})

module.exports = imageStorageConfig;