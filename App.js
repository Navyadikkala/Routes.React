//import logo from './logo.svg';
//import './App.css';
import{Route,Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Pagenotfound from "./Pagenotfound";
import Detailspage from "./Detailspage";
import Navbar from "./Navbar";
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="*" element={<Pagenotfound/>}/>
        <Route path="Detailspage" element={<Detailspage/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
