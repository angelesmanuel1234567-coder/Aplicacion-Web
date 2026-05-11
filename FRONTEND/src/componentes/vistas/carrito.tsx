import { useCarrito } from "../contex/CarritoContext";
import { enviarPedido } from "../services/api";
import "../css/carrito.css";

const Carrito = () => {
  const { carrito } = useCarrito();

  const total = carrito.reduce((acc: number, p: any) => acc + p.precio, 0);

  const handleConfirmarPedido = (e: any) => {
    e.stopPropagation();

    // Ejecuta tu función interna
    enviarPedido(carrito, total);

    // Construir mensaje con todo el carrito
    const numero = "51996468943";

    const listaProductos = carrito
      .map((p: any) => `- ${p.nombre} (S/ ${p.precio})`)
      .join("%0A");

    const texto = `Hola,Sr, Fabian quiero comprar:%0A${listaProductos}%0ATotal: S/ ${total}`;

    window.open(`https://wa.me/${numero}?text=${texto}`);
  };

  return (
    <div className="carrito">
      <h2>🛒 Carrito</h2>

      {carrito.map((p: any, i: number) => (
        <div key={i}>
          <h4>{p.nombre}</h4>
          <p>S/ {p.precio}</p>
        </div>
      ))}

      <h3>Total: S/ {total}</h3>

      <button className="btn-comprar" onClick={handleConfirmarPedido}>
        Confirmar Pedido
      </button>
    </div>
  );
};

export default Carrito;