import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";

import MainRouter from "./router/MainRouter";

function App() {
  return (
    <Router>
        <Header/>
        <MainRouter/>
        <Footer/>
    </Router>

  );
}

export default App;
