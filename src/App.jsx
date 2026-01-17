import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Login from "./paginas/login";
import Dashboard from "./paginas/Dashboard";

function App() {
  return (
    <>
      {/* Ahora solo les va a salir el login */}
        <Login /> 
        
        {/* Para mostrar uno u otro, comentar uno y el otro quitar comentado */}

       {/*<Dashboard />*/}
    </>
  );
}

export default App;

