import './App.css';
import Navbar from './Components/NavBar/Index';
import Home from './Components/Home';
import Coisas_para_levar from './Components/coisas_para_levar';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/coisas_para_levar" element={ <Coisas_para_levar/> } />
      </Routes>
   </>
 );
}

export default App;
