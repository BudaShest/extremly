import React from 'react';
import {Navbar, Tabs, Tab, Icon, NavItem, Row, Button, Col} from 'react-materialize';
import style from './header.module.css';

const Header = () => {
    return (
        <header>
            <Navbar
                className={style.navbar}
                alignLinks="right"
                brand={
                    <a className={style.logo} href="/"><Row>
                        <Col className={`${style.logoCol} s4`}>
                            <img className="responsive-img" src="/img/logo.png" alt=""/>
                        </Col>
                        <Col className={`${style.logoCol} s8`}>
                            <span className={`${style.logoSpan} row`}>Extremly</span>
                            <span className={`${style.logoText} row`}>Эсктримальный и нестандартный отдых</span>
                        </Col>
                    </Row></a>
                }
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                options={{
                    draggable:true,
                    edge: 'left',
                    inDuration:250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration:200,
                    preventScroll:true
                }}

            >
                <NavItem href="#">Места</NavItem>
                <NavItem href="#">События</NavItem>
                <NavItem href="#">Личности</NavItem>
                <Button
                    node="button"
                    type="submit"
                    waves="light"
                    className={style.loginBtn}
                >
                    Вход
                </Button>
            </Navbar>
        </header>
    );
};

export default Header;