import { useState } from "react";
import "./App.css";

import Login from "./paginas/login";
import Dashboard from "./paginas/Dashboard";

function App() {
  // Estado para saber si el usuario está logueado
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Cuando el login es correcto
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Cerrar sesión
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="app">
      {isAuthenticated ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;