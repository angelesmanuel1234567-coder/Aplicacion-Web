import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const conexion = mysql.createConnection(process.env.MYSQL_PUBLIC_URL as any);

conexion.connect((error) => {
  if (error) {
    console.log("Error MySQL", error);
  } else {
    console.log("MySQL conectado con PUBLIC_URL");
  }
});

export default conexion;
