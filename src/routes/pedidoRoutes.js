const express = require('express');
const router = express.Router();
const { crearPedido, obtenerCarrito, agregarAlCarrito, eliminarDelCarrito } = require('../controllers/pedidoController');

// Rutas del carrito
router.get('/carrito', obtenerCarrito);
router.post('/carrito', agregarAlCarrito);
router.delete('/carrito/:id_producto', eliminarDelCarrito);

// Checkout
router.post('/checkout', crearPedido);

module.exports = router;