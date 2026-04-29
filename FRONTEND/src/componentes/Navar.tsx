import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <div className="logo-container">
        <img src="../../public/img/logo.png" alt="Logo" className="logo-img" />
        <h2 className="logo-text">Mecánica Fabian</h2>
      </div>

      <ul className="menu">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>

    </nav>
  );
};

export default Navbar;

