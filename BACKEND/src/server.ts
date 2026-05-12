import express from "express";
import cors from "cors";
import conexion from "./model/conexion";

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "API funcionando 🚀"
  });
});

app.get("/usuarios", (req, res) => {
  conexion.query("SELECT * FROM usuario", (err, results) => {
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });
});

app.post("/validar", (req, res) => {

  const { dni, correo } = req.body;

  conexion.query(
    "SELECT * FROM usuario WHERE dni = ? AND correo = ?",
    [dni, correo],

    (err, results: any) => {

      if (err) {

        res.status(500).json({
          valido: false,
          mensaje: "Error servidor"
        });

      } else if (results.length > 0) {

        res.json({
          valido: true,
          mensaje: "✅ Usuario correcto"
        });

      } else {

        res.json({
          valido: false,
          mensaje: "❌ Usuario no encontrado"
        });

      }

    }
  );

});

app.listen(4000, () => {
  console.log("Servidor corriendo");
});