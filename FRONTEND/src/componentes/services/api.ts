
export const enviarPedido = async (carrito: any, total: number) => {
  await fetch("http://localhost:3001/api/pedido", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      cliente: "Cliente web",
      carrito,
      total
    })
  });
};