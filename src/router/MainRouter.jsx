import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Main from '../pages/Main/Main';
import Event from '../pages/Event/Event';

const MainRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Main/>}/>
            <Route path="/event" element={<Event/>}/>
        </Routes>
    );
};

export default MainRouter;