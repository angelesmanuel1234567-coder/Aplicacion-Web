import { useEffect, useState } from "react";
import "./hero.css";

const images = [
  "/img/imagen1.png",
  "/img/imagen2.png",
  "/img/imagen3.png",
    "/img/imagen4.png",

];

const textos = [
  "Bienvenido a Mecánica Fabian",
  "Reparación profesional de motores",
  "Servicio rápido y garantizado"
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  
  return (
  <div
    className="hero"
    style={{ backgroundImage: `url(${images[index]})` }}
  >
    <div className="overlay">
      <h1>{textos[index]}</h1>
      <p>Confianza, rapidez y calidad en cada servicio</p>

      <button className="hero-btn">
        Ver Servicios
      </button>
    </div>
  </div>
);

};
export default Hero;