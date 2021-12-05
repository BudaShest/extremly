const sequelize = require('../db/config');
const {DataTypes} = require('sequelize');

//-------Модели-------------------------------------------------------------
//Основные модели:

//Модель пользователя
const User = sequelize.define('user',{
    id: {type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true},
    login: {type:DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    avatar: {type:DataTypes.STRING, defaultValue:"def-user.jpg"},

}, {freezeTableName:true})

//Модель роли
const Role = sequelize.define('role', {
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type:DataTypes.STRING, unique: true, allowNull:false}
}, {freezeTableName:true})

//Модель пользовательской заявки
const Application = sequelize.define('application', {
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
}, {freezeTableName:true})

//Модель места
const Place = sequelize.define('place',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true, allowNull: false},
    address:{type:DataTypes.STRING, allowNull: true},
    description: {type:DataTypes.TEXT, allowNull: false}
}, {freezeTableName:true})

//Картинки места
const PlacesImage = sequelize.define('place_image', {
    id: {type:DataTypes.INTEGER, autoIncrement:true, primaryKey: true},
    image: {type:DataTypes.STRING, allowNull:true}
}, {freezeTableName:true})

//Модель страны
const Country = sequelize.define('country',{
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type:DataTypes.STRING, unique:true, allowNull: false},
    flag: {type:DataTypes.STRING, allowNull: true},
}, {freezeTableName:true})


//Модель климата
const Climat = sequelize.define('climat',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type:DataTypes.STRING, unique:true, allowNull:false},
    icon: {type:DataTypes.STRING, allowNull:true}
}, {freezeTableName:true})

//Модель события
const Event = sequelize.define('event',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type:DataTypes.STRING, unique:true, allowNull:false},
    from: {type:DataTypes.DATE(6), allowNull:false},
    until:{type:DataTypes.DATE(6), allowNull:false},
    description: {type:DataTypes.TEXT, allowNull:true},
    ['age_restrictions']:{type:DataTypes.INTEGER, allowNull:true},
    priority: {type:DataTypes.INTEGER, defaultValue: 3, allowNull:false}
}, {freezeTableName:true})

//Картинки событыия
const EventImage = sequelize.define('event_image',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    image:{type:DataTypes.STRING, allowNull:true}
}, {freezeTableName:true})

//Модель типа события
const EventType = sequelize.define('event_type',{
    id: {type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name: {type:DataTypes.STRING, unique:true, allowNull:false},
    icon: {type:DataTypes.STRING, allowNull: true}
}, {freezeTableName:true})

//Модель цены события (билеты)
const EventPrice = sequelize.define('event_price',{
    id: {type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    price: {type:DataTypes.INTEGER, allowNull:false},
    privilege: {type:DataTypes.TEXT, allowNull:false},
}, {freezeTableName:true})

//Модель персоны
const Person = sequelize.define('person', {
        id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        firstname: {type: DataTypes.STRING, allowNull: false},
        lastname: {type: DataTypes.STRING, allowNull: false},
        age: {type: DataTypes.INTEGER, allowNull: true},
        description: {type: DataTypes.TEXT, allowNull: true},
        profession: {type: DataTypes.STRING, allowNull: true},
}, {freezeTableName:true})

//Модель картинки персоны
const PersonImage = sequelize.define('person_images',{
    id: {type:DataTypes.INTEGER, autoIncrement:true, primaryKey: true},
    image: {type:DataTypes.STRING, allowNull:true},
}, {freezeTableName:true})

//Промежуточные модели (для связей много ко многим)

//Модель для организаторов события
const EventPerson = sequelize.define('event_person',{

}, {freezeTableName:true})

//Модель для участия в событии
const Participation = sequelize.define('participation',{

}, {freezeTableName:true})

//-----Связи моделей--------------------------------------------------------

// 1)Связь пользвователь - роль +
Role.hasMany(User);
User.belongsTo(Role);

// 2)Связь страна - место +
Country.hasMany(Place);
Place.belongsTo(Country);

//3)Связь климат - место +
Climat.hasMany(Place);
Place.belongsTo(Country);

//4)Связь место - картинки места +
Place.hasMany(PlacesImage);
PlacesImage.belongsTo(Place)

//5)Связь место - событие +
Place.hasMany(Event);
Event.belongsTo(Place);

//6)Связь событие- тип события +
EventType.hasMany(Event);
Event.belongsTo(EventType);

//7)Связь событие - картинки события +
Event.hasMany(EventImage);
EventImage.belongsTo(Event);

//8)Связь событие - цена на событие (билеты) +
Event.hasMany(EventPrice);
EventPrice.belongsTo(Event);

//9)Cвязь персона - картинки персоны +
Person.hasMany(PersonImage);
PersonImage.belongsTo(Person);

//10)Связь пользователь - заявка +
User.hasMany(Application);
Application.belongsTo(User);

//11)Связь цены на событие (билета) и заявки +
EventPrice.hasOne(Application);
Application.belongsTo(EventPrice);

//12)Связь событие - персона (через организаторов) +
Person.belongsToMany(Event, {through: EventPerson});
Event.belongsToMany(Person, {through: EventPerson});

//13)Связь события - пользователь (через участие) +
Event.belongsToMany(User, {through:Participation});
User.belongsToMany(Event, {through:Participation});



module.exports = {
    User,
    Role,
    Person,
    PersonImage,
    Event,
    EventImage,
    EventPrice,
    EventType,
    Climat,
    Country,
    Place,
    PlacesImage,
    Application,
}