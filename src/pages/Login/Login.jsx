import React from 'react';
import {Container, Icon, TextInput, Row, Button, Col} from "react-materialize";
import Convex from "../../components/Convex/Convex";
import FormContainer from "../../components/FormContainer/FormContainer";
import style from './Login.module.css';

const Login = () => {
    return (
        <main>
            <Container style={{padding:"40px 0"}}>
                <Convex background={'linear-gradient(269.17deg, #DB4463 13.23%, #F2733C 88.24%)'}>
                    <FormContainer icon={<Icon style={{color:"#F2733C", fontSize:"28em", padding:"10px"}}>login</Icon>} background={'#111111'}>
                        <form action="" className={style.logForm}>
                            <Row>
                                <TextInput s={9} l={9}
                                    className={style.logForm_icon} icon={<Icon>email</Icon>} id="TextInput-36"
                                           label="Email"
                                />
                                <TextInput s={9} l={9}
                                    icon={<Icon>password</Icon>} id="TextInput-39" label="Password" password
                                />
                                <Col style={{margin:40}} s={8}>
                                    <Col l={4} push={"s2"}>
                                        <Button style={{backgroundColor:"#42A379"}} node="button" type="submit" waves="light">Войти
                                            <Icon right>login</Icon>
                                        </Button>
                                    </Col>
                                    <Col l={4} push={"s2"}>
                                        <Button style={{backgroundColor:"#ee6e73"}} node="button" type="reset" waves="light">Стереть
                                            <Icon right>close</Icon>
                                        </Button>
                                    </Col>
                                </Col>
                                <Col push={"s1"} s={11}>
                                    <p style={{color:"lightgrey"}}>Вы здесь впервые? Тогда <a href="">зарегистрируйтесь</a></p>
                                </Col>
                            </Row>
                        </form>
                    </FormContainer>
                </Convex>
            </Container>
        </main>
    );
};

export default Login;