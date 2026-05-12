import { useState } from "react";
import '../css/carrito.css'






const Productos = () => {
  const [productoActivo, setProductoActivo] = useState<any>(null);

 

  const productos = [
    {
      nombre: "Máquina N° 3",
      img: "/img/imagen2.png",
      descripcion: "Aumenta la producción y reduce el esfuerzo en el despulpado",
      precio: "S/ 80",
      extra: "✔ Garantía 6 meses",
      badge: "Más vendido"
    },
    {
      nombre: "Máquina N° 4",
      img: "/img/imagen2.png",
      descripcion: "Mayor eficiencia con 4 bocas para trabajo rápido",
      precio: "S/ 50",
      extra: "✔ Entrega rápida",
      badge: "Oferta"
    },
    {
      nombre: "Chasis",
      img: "/img/imagen3.png",
      descripcion: "Estructura resistente para larga duración",
      precio: "S/ 250",
      extra: "✔ Alta resistencia",
      badge: ""
    },
    {
      nombre: "Seleccionadora",
      img: "/img/imagen4.png",
      descripcion: "Mejora la calidad del producto final",
      precio: "S/ 120",
      extra: "✔ Precisión garantizada",
      badge: ""
    }
  ];

  return (
    <section id="productos">
      <h2 className="titulo">Nuestros Productos</h2>

      <div className="productos-container">
        {productos.map((p, i) => (
          <div key={i} className="producto" onClick={() => setProductoActivo(p)}>
            
            {p.badge && <span className="badge">{p.badge}</span>}

            <img src={p.img} alt={p.nombre} />

            <h3>{p.nombre}</h3>
            <p>{p.descripcion}</p>

            <span className="precio">{p.precio}</span>

            <p className="extra">{p.extra}</p>

            <button
  className="btn-comprar"
  onClick={(e) => {
    e.stopPropagation();
    const numero = "51996468943";
    const texto = `Hola, quiero comprar: ${p.nombre}`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`);
  }}
>
  Consultar
</button>

<button
  className="btn-carrito"
  onClick={(e) => {
    e.stopPropagation();
   
  }}
>
  Agregar al carrito
</button>

          </div>
        ))}
      </div>

      {/* MODAL */}
      {productoActivo && (
        <div className="modal" onClick={() => setProductoActivo(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            <img src={productoActivo.img} alt="" />

            <h2>{productoActivo.nombre}</h2>
            <p>{productoActivo.descripcion}</p>

            <p className="precio">{productoActivo.precio}</p>
            <p className="extra">{productoActivo.extra}</p>

            <button
              className="btn-comprar"
              onClick={() => {
                const numero = "51996468943";
                const texto = `Hola, quiero comprar: ${productoActivo.nombre}`;
                window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`);
              }}
            >
              Comprar por WhatsApp
            </button>

            <button className="btn-cerrar" onClick={() => setProductoActivo(null)}>
              Cerrar
            </button>

          </div>
        </div>
      )}
    </section>
  );
};

export default Productos;