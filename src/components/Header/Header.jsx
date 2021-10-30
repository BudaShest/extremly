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
                extendWith={
                    <Tabs
                        className="tabs-transparent"
                        scope="tabs"
                    >
                        <Tab
                            className="white-text"
                            options={{duration:300, onShow:null, responsiveThreshold:Infinity, swipeable:true}}
                            title="test 1"
                            active
                        >
                            <div className={`${style.tabContainer} tab-container`} style={{backgroundImage:'url("img/overlook.jpg")', height:'600px', backgroundSize:"cover",display:'flex', backgroundPosition:'center',backgroundAttachment:"fixed"}}>
                                <Row style={{marginBottom:"-1px", alignSelf:'flex-end',  backgroundColor:"rgba(0,0,0,0.5)", padding:"14px", fontSize:"1.1em"}}>
                                    <p className="white-text">
                                        Успейте заброинровать номера в легендарном отеле "Оверлук"!
                                    </p>
                                </Row>
                            </div>
                        </Tab>
                        <Tab
                            className="white-text"
                            options={{duration:300, onShow:null, responsiveThreshold:Infinity, swipeable:true}}
                            title="test 2"
                        >
                            <div className="tab-container" style={{backgroundImage:'url("img/velo.jpg")', height:'600px', backgroundSize:"cover",display:'flex', backgroundPosition:'center',backgroundAttachment:"fixed"}}>
                                <Row style={{marginBottom:"-1px", alignSelf:'flex-end', backgroundColor:"rgba(0,0,0,0.5)", padding:"14px", fontSize:"1.1em"}}>
                                    <p  className="white-text">
                                        Велоозаезд по Аркаиму. Вы умрёте. Lorem ipsum dolor sit amet, consectetur.!
                                    </p>
                                </Row>
                            </div>
                        </Tab>
                        <Tab
                            className="white-text"
                            options={{duration:300, onShow:null, responsiveThreshold:Infinity, swipeable:true}}
                            title="test 3"
                        >
                            <div className="tab-container" style={{backgroundImage:'url("img/scaryshit.jpg")', height:'600px', backgroundSize:"cover",display:'flex', backgroundPosition:'center',backgroundAttachment:"fixed"}}>
                                <Row style={{marginBottom:"-1px", alignSelf:'flex-end',  backgroundColor:"rgba(0,0,0,0.5)", padding:"14px", fontSize:"1.1em"}}>
                                    <p className="white-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid dignissimos incidunt suscipit vitae?
                                    </p>
                                </Row>
                            </div>
                        </Tab>
                        <Tab
                            className="white-text"
                            options={{duration:300, onShow:null, responsiveThreshold:Infinity, swipeable:true}}
                            title="test 4"
                        >
                            <div className="tab-container" style={{backgroundImage:'url("img/parashut.jpg")', height:'600px', backgroundSize:"cover",display:'flex', backgroundPosition:'center',backgroundAttachment:"fixed"}}>
                                <Row style={{marginBottom:"-1px", alignSelf:'flex-end',  backgroundColor:"rgba(0,0,0,0.5)", padding:"14px", fontSize:"1.1em"}}>
                                    <p className="white-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque est facilis harum laboriosam maxime nihil porro vero.
                                    </p>
                                </Row>
                            </div>
                        </Tab>

                    </Tabs>
                }
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