const {Event, EventPrice, EventImage} = require('../models/model');


//В данном файле определён класс-контрллер для события
//TODO возможно вынести в абстрактный класс методы объектов
class EventController{
    //Получить все события
    async getAll(req, res){
        const result = Event.findAll()
        res.status(200).json(result)
    }


    //Получить одно событие
    async getOne(req, res){

    }



    //Создать событие
    async create(req, res){
        console.log(req.body)
    }

    //Удалить событие
    async delete(req, res){

    }

    //Котик Евгений
    //                    _----
    //  /| /\             //
    // |0  0 |           //
    // ()*()  \__________//
    //  \                |
    //  \                |
    //   ||  ||-------/\ \
    //   ||  ||      \\  \\
    //   //  //      //  //


    //Обновить событие
    async update(req,res){

    }
}

module.exports = new EventController()