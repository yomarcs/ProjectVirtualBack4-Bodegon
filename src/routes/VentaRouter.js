const { Router } = require('express');
const { crearVenta, listarVentas, filtroVentas } = require('../controllers/VentaController');

module.exports = venta_router = Router();
venta_router.post('venta', crearVenta);
venta_router.get('/venta', listarVentas);
venta_router.get('/venta/buscar', filtroVentas);

 