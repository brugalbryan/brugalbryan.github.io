import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skill';
import Contact from './components/Contact/Contact';



import './App.css';
import './index.css'

const App = () => {
  return (
    <div className="App">
      < NavBar />
      < Home />
      < About />
      < Skills />
      {/* < Contact /> */}
    </div>
  );
}

export default App;