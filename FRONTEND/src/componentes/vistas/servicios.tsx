import { useState } from "react";

const Servicios = () => {
  const [servicioActivo, setServicioActivo] = useState<any>(null);

  const servicios = [
    {
      titulo: "Reparación de maquinas de cafe",
      descripcion: "Diagnóstico y reparación completa de despulpadoras.",
      detalle: "Reparamos fallas mecánicas, eléctricas y optimizamos el rendimiento.",
      precio: "S/ 100"
    },
    {
      titulo: "Mantenimiento de tamboras",
      descripcion: "Evita fallas con revisiones periódicas.",
      detalle: "Limpieza, ajuste y revisión completa.",
      precio: "S/ 60"
    },
    {
      titulo: "Mantenimiento de pechero",
      descripcion: "Servicio rápido con productos de calidad.",
      detalle: "Cambio de piezas y lubricación.",
      precio: "S/ 50"
    },
    {
      titulo: "Componentes",
      descripcion: "Para detectar fallas.",
      detalle: "Venta de repuestos originales.",
      precio: "Desde S/ 20"
    }
  ];

  return (
    <section id="servicios">
      <h2 className="titulo">Nuestros Servicios</h2>

      <div className="servicios-container">
        {servicios.map((s, i) => (
          <div key={i} className="card" onClick={() => setServicioActivo(s)}>
            <h3>{s.titulo}</h3>
            <p>{s.descripcion}</p>
          </div>
        ))}
      </div>

      {servicioActivo && (
        <div className="modal">
          <div className="modal-content">
            <h2>{servicioActivo.titulo}</h2>
            <p>{servicioActivo.detalle}</p>
            <p><strong>{servicioActivo.precio}</strong></p>

            <button
              onClick={() => {
                const numero = "51996468943";
                const texto = `Hola, quiero consultar sobre: ${servicioActivo.titulo}`;
                window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`);
              }}
            >
              Consultar
            </button>

            <button onClick={() => setServicioActivo(null)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Servicios;
