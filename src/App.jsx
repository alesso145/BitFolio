import { useState } from 'react';
import './App.css';
import Login from "./paginas/login";
import Dashboard from "./paginas/Dashboard";

function App() {
  // Login
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Función para entrar
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Función para salir
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      {isAuthenticated ? (
        // Pasamos la función de cierre
        <Dashboard onLogout={handleLogout} />
      ) : (
        // Pasamos la función de login
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;