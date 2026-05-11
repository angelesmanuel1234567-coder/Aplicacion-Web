"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const controller = require("../controladores/pedidosController");
router.post("/pedido", controller.crearPedido);
module.exports = router;
