import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Home from './components/Home/Home';


import './App.css';

const App = () => {
  return (
    <div className="App">
      < NavBar />
      < Home />
      < About />

    </div>
  );
}

export default App;