// src/paginas/login/Login.jsx
import './Login.css'
import logo from '../../BitFolioLogo.png'

function Login({ onLogin }) {
  return (
    <div className="login-card">
      <img src={logo} alt="BitFolio" className="login-logo" />

      <h1>BitFolio</h1>
      <p>Developer Team Profiles</p>

      <div className="input-group">
        <span className="icon">👤</span>
        <input type="text" placeholder="USUARIO" />
      </div>

      <div className="input-group">
        <span className="icon">🔒</span>
        <input type="password" placeholder="CONTRASEÑA" />
      </div>

      <button className="login-btn" onClick={onLogin}>
        INGRESAR
      </button>
    </div>
  )
}

export default Login