import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar  from'./componentes/Navar'
import Hero from './componentes/Hero'
import Footer from "./componentes/Footer";
import './App.css'


 function App() {
  return (
    <>
      <Navbar />
       <section id="inicio">
        <h1>Bienvenido a Nuestro Panel </h1>
         <Hero />

      </section>
     
       
       

    

      <section id="servicios">
  <h2 className="titulo">Nuestros Servicios</h2>

  <div className="servicios-container">
    <div className="card">
      <h3>Reparación de maquinas de cafe</h3>
      <p>Diagnóstico y reparación completa de despulpadoras.</p>
    </div>

    <div className="card">
      <h3>Mantenimiento de tamboras </h3>
      <p>Evita fallas con revisiones periódicas.</p>
    </div>

    <div className="card">
      <h3>mantenimineto de pechero</h3>
      <p>Servicio rápido con productos de calidad.</p>
    </div>

    <div className="card">
      <h3>componentes</h3>
      <p>  para detectar fallas.</p>
    </div>
  </div>
</section>

      <section id="productos">
  <h2 className="titulo">Nuestros Productos</h2>

  <div className="productos-container">
    
    <div className="producto">
      <img src="/img/imagen2.png" alt="Producto" />
      <h3>Maquina N° 3 </h3>
      <p>Alta calidad para mejor rendimiento</p>
      <span className="precio">S/ 80</span>
    </div>

    <div className="producto">
      <img src="/img/imagen2.png" alt="Producto" />
      <h3>Maquina N° 4 </h3>
      <p>Mejora la eficiencia del motor con 4 vocas </p>
      <span className="precio">S/ 50</span>
    </div>

    <div className="producto">
      <img src="/img/imagen3.png" alt="Producto" />
      <h3>Chasis</h3>
      <p>Larga duración y potencia</p>
      <span className="precio">S/ 250</span>
    </div>

    <div className="producto">
      <img src="/img/imagen4.png" alt="Producto" />
      <h3>Seleccionadora</h3>
      <p>Seguridad y resistencia</p>
      <span className="precio">S/ 120</span>
    </div>

  </div>
</section>

      <section id="contacto">
        <h1>Contacto</h1>
        <Footer />

      </section>
    </>
  );
}


export default App;


