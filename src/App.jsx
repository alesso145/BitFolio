import { useState } from "react";
import "./App.css"; 
import Login from "./paginas/login";
import Dashboard from "./paginas/Dashboard";

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("activeUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("activeUser", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("activeUser");
  };

  return (
    <div className="app">
      {user ? (
        <Dashboard onLogout={handleLogout} user={user} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;