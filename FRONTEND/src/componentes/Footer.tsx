import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-container">

        <div className="footer-section">
          <h3>Mecánica Fabian</h3>
          <p>Servicio profesional en maquina despulpadoras.</p>
        </div>

        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p>📍 Satipo - Perú</p>
          <p>📞 999 999 999</p>
          <p>✉ mecanica@email.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Mecánica Fabian - Todos los derechos reservados</p>
      </div>

    </footer>
  );
};

export default Footer;