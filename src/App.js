import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min';

import Header from './components/Header/Header';
import SectionSlider from "./components/SectionSlider";
import SectionAbout from "./components/SectionAbout";
import Footer from "./components/Footer/Footer";
import {Parallax} from 'react-materialize';


function App() {
  return (
    <div className="App">
      <Header/>
      <SectionSlider/>
      <SectionAbout/>
        <Parallax
            image={<img alt="" src="http://materializecss.com/images/parallax1.jpg"/>}
            options={{
                responsiveThreshold: 0
            }}
        />
      <Footer/>
    </div>
  );
}

export default App;
