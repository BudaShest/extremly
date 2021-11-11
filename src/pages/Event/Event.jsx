import React,{useState} from 'react';
import {Carousel, Container, Row, Col, Select, Icon, TextInput, Button} from "react-materialize";
import style from './Event.module.css';
import Persons from "../../components/Persons/Persons";
import Gallery from "../../components/Gallery/Gallery";
import Comments from "../../components/Comments/Comments";

import {comments as defValueComments} from "../../components/SectionAbout";
import {initialState as defValuePersons} from "../../components/SectionAbout";
import FormContainer from "../../components/FormContainer/FormContainer";
import Convex from "../../components/Convex/Convex";

const defValueEvent = {
    name:"Burning Man",
    from: `27 august ${new Date(Date.now()).getFullYear()}`,
    until: `9 september ${new Date(Date.now()).getFullYear()}`,
    type:"Фестивали",
    description:`Товарищи! начало повседневной работы по формированию позиции требуют от нас анализа системы обучения кадров, соответствует насущным потребностям. Не следует, однако забывать, что начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание новых предложений. Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения модели развития.
Таким образом дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание систем массового участия. Товарищи! сложившаяся структура организации способствует подготовки и реализации систем массового участия. Задача организации, в особенности же начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке соответствующий условий активизации.`,
    age_restrictions:'18+',
    country:'США',
    country_icon:'',
    place:'пустыня Блэк Рок в Неваде',
    climat:'Жаркий',
    climat_icon:"",
    offer:'Легендарный фестиваль. который не нуждается в представлении!',
}

const defValuephotos = [
    "https://s.yimg.com/hd/cp-video-transcode/prod/2020-04/13/5e94c04e90a80d79a635263c/5e94c04e90a80d79a635263d_o_U_v2.jpg",
    "https://adventure.com/wp-content/uploads/2017/07/Burning-Man-Nicola-and-crew-Photo-credit-Nicola-Bailey-1920x1080.jpg",
    "https://look.com.ua/pic/201904/1920x1080/look.com.ua-343981.jpg",
    "https://cdn.concreteplayground.com/content/uploads/2012/08/Burning-Man-1920x1080.jpeg",
    "https://www.look.com.ua/download.php?file=201904/1920x1080/look.com.ua-343990.jpg",
    "https://img3.goodfon.ru/original/1920x1080/0/35/burning-man-nevada-ssha-818.jpg",
    "https://journal.burningman.org/wp-content/uploads/2018/07/28826973_990752704408172_3881091770915510101_o.jpg",
    "https://look.com.ua/pic/201904/1920x1080/look.com.ua-344214.jpg",
    "https://conteudo.imguol.com.br/c/blogs/78/2019/09/19/o-mais-importante-evento-de-networking-do-mundo-que-voce-nunca-ouviu-falar-1568876557073_v2_1920x1080.jpg",
]


const Event = () => {

    const [event] = useState(defValueEvent);
    const [persons] = useState(defValuePersons);
    const [photos] = useState(defValuephotos);
    const [comments] = useState(defValueComments);

    return (
        <main style={{backgroundColor:"#222222"}}>
            <Carousel
                className={style.eventSlider}
                carouselId="Carousel-37"
                images={[
                    'https://i.wpimg.pl/1920x0/m.gadzetomania.pl/bman-cd033a10f11572fe28466bb7fd5.jpg',
                    'https://img1.goodfon.ru/original/1920x1080/c/21/burning-man-nevada-ssha-4201.jpg',
                    'https://i.iheart.com/v3/url/aHR0cDovL2Nkbi52aWRpYmxlLnR2L3Byb2QvMjAxNy0wOC8yNi81OWExY2U0YjQ0YTY0YjQyMDk4NjYzNzIvNTlhMWNlNGI2NzA5ODQzMjkzMDEwMzRkXzE5MjB4MTA4MF9GX3YwLmpwZw==',
                    'https://www.bz-berlin.de/data/uploads/2014/12/0-2014-12-02t025544z_2104553921_gf2eabs074x01_rtrmadp_3_poy-ent2014_1419703371-1920x1080.jpg',
                    'http://wallpoper.com/images/00/43/56/20/bliss-dance-artwork_00435620.jpg'
                ]}
                options={{
                    fullWidth: true,
                    indicators: true,

                }}
            />
            <Container>
                <h2 className="center-align white-text">{event.name}</h2>
                <h5 className="center-align white-text">{event.type}</h5>
                <Row>
                    <Col l={5}>
                        <Col className="white-text">
                            <h4>О событии</h4>
                            <h5>Место:</h5>
                            <ul>
                                <li><strong>Место проведения: </strong><a href="#">{event.place}</a></li>
                                <li><strong>Страна проведения: </strong>{event.country}</li>
                                <li><strong>Климат</strong>: {event.climat}</li>
                            </ul>
                            <h5>Дата:</h5>
                            <ul>
                                <li><strong>Начинается: </strong> {event.from}</li>
                                <li><strong>Заканчивается: </strong> {event.until}</li>
                            </ul>
                            <h5>Прочее:</h5>
                            <ul>
                                <li><strong></strong></li>
                            </ul>
                        </Col>
                    </Col>
                    <Col l={7}>
                        <Col className="white-text">
                            <h3>{event.offer}</h3>
                            <p>{event.description}</p>
                        </Col>
                    </Col>
                </Row>
                <h3 className="white-text center-align">Галерия</h3>
                <Gallery photos={photos}/>
                <h3 className="white-text center-align">Ответсвенные лица:</h3>
                <Persons persons={defValuePersons}/>
                <Comments comments={comments}/>
                <Convex size={"large"} s={12} background={'linear-gradient(269.17deg, #DB4463 13.23%, #F2733C 88.24%)'}>
                    <FormContainer icon={<img style={{width:'100%'}} src="img/ui/letter.png" alt=""/>} background={'#111111'}>
                        <form action="">
                            <Row>

                                <Select
                                    s={10}
                                    icon={<Icon className="little-icon">cloud</Icon>}
                                    id="Select-15"
                                    multiple={false}
                                    options={{
                                        classes: '',
                                        dropdownOptions: {
                                            alignment: 'left',
                                            autoTrigger: true,
                                            closeOnClick: true,
                                            constrainWidth: true,
                                            coverTrigger: true,
                                            hover: false,
                                            inDuration: 150,
                                            onCloseEnd: null,
                                            onCloseStart: null,
                                            onOpenEnd: null,
                                            onOpenStart: null,
                                            outDuration: 250
                                        }
                                    }}
                                    value=""
                                >
                                    <option
                                        disabled
                                        value=""
                                    >
                                        Choose your option
                                    </option>
                                    <option value="1">
                                        Option 1
                                    </option>
                                    <option value="2">
                                        Option 2
                                    </option>
                                    <option value="3">
                                        Option 3
                                    </option>
                                </Select>


                                <TextInput
                                    s={10}

                                    icon={<Icon className="little-icon">email</Icon>}
                                    id="TextInput-34"
                                    label="Email"
                                />
                                <Row>
                                    <Col push={'s7'} s={3}>
                                        <Button >Подписаться</Button>
                                    </Col>
                                </Row>
                            </Row>
                        </form>
                    </FormContainer>
                </Convex>
            </Container>
        </main>
    );
};

export default Event;