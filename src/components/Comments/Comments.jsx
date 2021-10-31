import React from 'react';
import style from './Comments.module.css';
import {Row, Col, Button} from "react-materialize";
import Comment from "../Comment/Comment";

//TODO здесь надо сделать пропс, чтобы содержимое первого столбца передавалось туда (или форма комментирования
//или текст (о нас))
const Comments = ({comments}) => {
    return (
        <Row>

            <Col l={5} className={style.commentsText}>
                <h2>Lorem ipsum.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi consectetur consequatur corporis exercitationem hic incidunt, ipsam ipsum modi nam natus nemo non perspiciatis placeat quasi quos reiciendis sunt totam ut vel velit voluptatibus voluptatum! Autem delectus dicta explicabo omnis.</p>
                <Button large>Вперед!</Button>
            </Col>
            <Col l={7} className={style.commentsContainer}>
                {
                    comments.map(comment=><Comment {...comment}/>)
                }
            </Col>
        </Row>
    );
};

export default Comments;