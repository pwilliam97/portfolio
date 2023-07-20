//Importation de REACT
import React from 'react';
import {Routes, Route} from 'react-router-dom'

//Importation des Components
import Header from './components/Header'

//Importation des Pages
import Home from './pages/home'
 
//Importation du CSS 
import './styles/general/general.css'

function App() {
  return (
    <div id="container">
      <Header/>
      <Routes>
        <Route path="/portfolio/" element={<Home/>}/>
      </Routes>
    </div>

  );
}

export default App;
