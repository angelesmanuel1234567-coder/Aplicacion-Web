import Navbar from './Navar'
import Footer from '../vistas/footer'
import Contacto from '../vistas/contacto';
import Servicios from '../vistas/servicios'
import Productos from '../vistas/productos';
import Carrito from '../vistas/carrito';
import '../css/App.css'

function App() {
  return (
    <div className="app">
      
      <Navbar />

      <main className="content">
        
        <section id="inicio">
          <h1>Bienvenido a Nuestro Panel</h1>
          <Contacto /> 
        </section>

          <Servicios />

         <main className="content">
  <Productos />
  <Carrito /> {/* 👈 aquí */}
</main>

        <section id="contacto">
          <h1>Contacto</h1>
          <Footer />

        </section>

      </main>

    </div>
  );
}

export default App;