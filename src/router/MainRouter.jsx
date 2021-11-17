import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Main from '../pages/Main/Main';
import Event from '../pages/Event/Event';
import Events from '../pages/Events/Events';

const MainRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Main/>}/>
            <Route path="/event" element={<Event/>}/>
            <Route path="/events" element={<Events/>}/>
        </Routes>
    );
};

export default MainRouter;