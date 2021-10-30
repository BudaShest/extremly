import React from 'react';
import {Container,Row, Col, Button, Icon, Card} from 'react-materialize'

const SectionAbout = () => {
    return (
        <section style={{backgroundColor:"#222222", padding:"30px 0"}}>
            <Container>
                <Row style={{padding:"34px 25px", backgroundColor:'#101010', marginBottom:'60px'}}>
                    <Col className="m4 push white-text">
                        <h2>О нас</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum expedita mollitia sunt! Amet blanditiis cupiditate debitis deserunt distinctio dolor ducimus enim, excepturi explicabo harum, id, itaque maiores minus odit praesentium quae quaerat quasi qui saepe similique tempora ullam ut vero voluptatibus voluptatum?
                        </p>
                        <p style={{fontSize:'0.8em', color:"lightgray"}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis neque quasi repudiandae sunt tempora!
                        </p>
                        <Button
                            large
                            node="a"
                            style={{
                                marginRight: '5px',
                                backgroundColor:"#DE4564",
                                color:"white"
                            }}
                            waves="light"
                        >
                            Button
                            <Icon left>
                                cloud
                            </Icon>
                        </Button>
                    </Col>
                    <Col className="m4 push-m1">
                        <div style={{width:"600px", height:"400px",backgroundColor:"#DE4564"}}><img className="hoverable" style={{width:"100%",height:"100%",position:'relative',top:"20px", left:"20px"}} src="https://www.ski.ru/kohana/upload/ckfinder_images/u72923/images/72923_1401882273.JPEG" alt=""/></div>
                    </Col>
                </Row>
                <h3 className="white-text">Наши преимущества</h3>
                <Row>
                    <Col className="s5 large" style={{backgroundColor:'#F2733C',padding:0, margin:"50px 0"}}>
                        <Card style={{backgroundColor:"#111111", width:"100%", height:'100%', margin:0, position:'relative', top:20,left:20}}
                        title="Мы сотрудничаем напрямую с организаторами"
                        className="white-text">
                        <p style={{color: "#F2733C", marginLeft: '30px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque enim facere nemo quis? Alias, amet beatae blanditiis delectus dolor doloribus ea, eveniet fugit harum minus molestias numquam obcaecati, praesentium quasi quo sequi unde. Delectus distinctio dolores ipsa odio officiis quis?</p>
                        </Card>
                    </Col>
                    <Col className="s6 push-s1 small" style={{backgroundColor:'#DE4564',padding:0, margin:"30px 0"}}>
                        <Card style={{backgroundColor:"#111111", width:"100%", height:'100%', margin:0, position:'relative', top:20,left:20}}
                        title="Мы сотрудничаем напрямую с организаторами"
                        className="white-text">
                        <p style={{color: "#DE4564", marginLeft: '30px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae deserunt eligendi ipsam ipsum libero nam nisi quae quaerat sed? Animi eveniet quam quisquam ratione!</p>
                        </Card>
                    </Col>
                    <Col className="s6 push-s1 small" style={{backgroundColor:'#43A17C',padding:0, margin:"30px 0"}}>
                        <Card style={{backgroundColor:"#111111", width:"100%", height:'100%', margin:0, position:'relative', top:20,left:20}}
                        title="Мы сотрудничаем напрямую с организаторами"
                        className="white-text">
                        <p style={{color: "#43A17C", marginLeft: '30px'}}>Lorem ipsum dolor sit.</p>
                        </Card>
                    </Col>
                </Row>
                <h3 className="white-text">Наша команда:</h3>
                <Row>
                    <Col>
                        <img src="" alt=""/> 
                    </Col>
                    <Col>
                        <img src="" alt=""/>
                    </Col>
                    <Col>
                        <img src="" alt=""/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SectionAbout;