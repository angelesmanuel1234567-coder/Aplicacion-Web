import { useState } from "react";
import '../css/contacto.css'


const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarWhatsApp = () => {
    if (!nombre || !mensaje) {
      alert("Completa todos los campos");
      return;
    }

    const numero = "51928318714"; // 👉 tu número real
    const texto = `Hola, soy ${nombre}. ${mensaje}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="formulario">
      <h2>Contáctanos</h2>

      <input
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <textarea
        placeholder="Escribe tu mensaje"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      />

      <button onClick={enviarWhatsApp}>
        Enviar por WhatsApp
      </button>
    </div>
  );
};

export default Contacto;