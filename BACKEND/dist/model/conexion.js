"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql2");
const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fabian"
});
module.exports = conexion;
