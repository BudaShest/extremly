import React from 'react';
import {Row, Col} from "react-materialize";
import style from './SocialLinks.module.css';

const SocialLinks = ({links}) => {
    return (
        <Row>
            {
                links.map(link=>{
                    return (
                        <Col key={link.id}>
                            <img className={style.linkImg} src={link.img} alt=""/>
                        </Col>
                    );
                })
            }
        </Row>
    );
};

export default SocialLinks;