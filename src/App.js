import './styles/App.css'
import { Link } from 'react-scroll';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Skill from './pages/Skill';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
    <Link>
    <Home/>
    <About/>
    <Project/>
    <Skill/>
    <Contact/>
    </Link>
    </div>
  );
}

export default App;
