import './App.css';
import Navbar from './Components/NavBar/Index';
import Home from './Components/Home';
import Hotel from './Components/hotel';
import Coisas_para_levar from './Components/coisas_para_levar';
import { Routes, Route } from "react-router-dom";
import Precos from './Components/precos';
import Exemplo_Grid from './Components/exemplo_grid';
import { Contato } from './Components/contato';

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/coisas_para_levar" element={ <Coisas_para_levar/> } />
        <Route path="/precos" element={ <Precos/> } />
        <Route path="/hotel" element={ <Hotel/> } />
        <Route path="/exemplo_grid" element={ <Exemplo_Grid/> } />
        <Route path="/contato" element={ <Contato/> } />
      </Routes>
   </>
 );
}

export default App;
