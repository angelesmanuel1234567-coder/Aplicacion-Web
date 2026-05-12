import { useState } from "react";

function Validar() {

  const [dni, setDni] = useState("");
  const [correo, setCorreo] = useState("");

  const validarUsuario = async () => {
    

  console.log("CLICK");

    const respuesta = await fetch(
      "https://aplicacion-web-mubj.onrender.com/validar",
      
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          dni,
          correo
        })
      }
    );

    const data = await respuesta.json();

    if (data.valido) {

      alert("Usuario válido");

    } else {

      alert("Usuario no encontrado");

    }

  };

  return (
    <div>

      <h1>Validar Usuario</h1>

      <input
        type="text"
        placeholder="Ingrese DNI"
        value={dni}
        onChange={(e) => setDni(e.target.value)}
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Ingrese correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />

      <br />
      <br />

      <button onClick={validarUsuario}>
        
        Validar
      </button>

    </div>
  );
}

export default Validar;