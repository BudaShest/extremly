import React from 'react';
import {Row, Col, MediaBox} from "react-materialize";



const Gallery = ({photos}) => {
    return (
        <Row>
            {
                photos.map(photo=>{
                    return (
                        <Col l={4} s={6} style={{margin:"10px 0"}}>
                            <MediaBox
                                id="MediaBox_9"
                                options={{
                                    inDuration: 275,
                                    // onCloseEnd: null,
                                    // onCloseStart: null,
                                    // onOpenEnd: null,
                                    // onOpenStart: null,
                                    outDuration: 200
                                }}
                            >
                                <img
                                    alt=""
                                    src={photo}
                                    style={{width:"100%"}}
                                    // width="650"
                                />
                            </MediaBox>
                        </Col>
                    )
                })
            }
        </Row>
    );
};

export default Gallery;