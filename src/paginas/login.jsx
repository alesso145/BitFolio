export default function Login() {
  return (
    <div className="pagina-login">
      <div className="carta-login">

        <img src="\BitFolioLogo.png" alt="Logo BitFolio" />

        <h1>BitFolio</h1>
        <p>Developer Team Profiles</p>

        <form>
          <input type="text" placeholder="USUARIO" />
          <input type="password" placeholder="CONTRASEÑA" />
          <button type="submit">INGRESAR</button>
        </form>

      </div>
    </div>
  );
}
