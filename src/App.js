import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min';

import Header from './components/Header/Header';
import SectionSlider from "./components/SectionSlider";
import SectionAbout from "./components/SectionAbout";


function App() {
  return (
    <div className="App">
      <Header/>
      <SectionSlider/>
      <SectionAbout/>
    </div>
  );
}

export default App;
