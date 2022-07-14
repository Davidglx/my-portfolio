import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills';
import { Project } from './components/Projects';
import {Footer} from './components/Footer';
import {Contact} from './components/Contact';


const App = () => {
  return (
   <div className="App">
     <NavBar />
     <Banner />
     <Skills />
     <Project />
     <Contact />
     <Footer />
   </div>
  );
};

export default App;
