const db = require("../modelos/db");

exports.crearPedido = (req, res) => {
  const { cliente, carrito, total } = req.body;

  // 1. guardar pedido
  db.query(
    "INSERT INTO pedidos (cliente, total) VALUES (?, ?)",
    [cliente, total],
    (err, result) => {
      if (err) return res.status(500).send(err);

      const pedidoId = result.insertId;

      // 2. guardar detalle
      carrito.forEach(item => {
        db.query(
          "INSERT INTO detalle_pedido (pedido_id, producto_id, cantidad) VALUES (?, ?, ?)",
          [pedidoId, item.id, 1]
        );
      });

      res.send("Pedido guardado");
    }
  );
};