const { Sequelize } = require('sequelize');
const ProductoModel = require('../models/ProductoModel');
const UsuarioModel = require('../models/UsuarioModel');
const CategoriaModel = require('../models/CategoriaModel');
const MarcaModel = require('../models/MarcaModel');
const CarritoModel = require('../models/CarritoModel');
const CabeceraVentaModel = require('../models/CabeceraVentaModel');
const DetalleVentaModel = require('../models/DetalleVentaModel');

// Conexion BD - bodegon
const conexion = new Sequelize(
    "bodegon","root","root", {
        host: "localhost",
        dialect: "mysql",
        timezone: "-05:00",
        logging: false,
        dialectOptions: {
            dateStrings: true
        }
    }
);

// Tablas
const Producto = ProductoModel(conexion);
const Usuario = UsuarioModel(conexion);
const Categoria = CategoriaModel(conexion);
const Marca = MarcaModel(conexion);
const Carrito = CarritoModel(conexion);
const CabeceraVenta = CabeceraVentaModel(conexion);
const DetalleVenta = DetalleVentaModel(conexion);

// Relaciones inversas
Categoria.hasMany(Producto, { foreignKey: { name:'categoria_id', allowNull: false}});
Producto.belongsTo(Categoria, { foreignKey: 'categoria_id'});

Marca.hasMany(Producto, { foreignKey: { name: 'marca_id', allowNull: false}});
Producto.belongsTo(Marca, { foreignKey:'marca_id'});

Producto.hasMany(DetalleVenta, { foreignKey: { name: 'producto_id', allowNull: false }});
DetalleVenta.belongsTo(Producto, { foreignKey: 'producto_id'});

Producto.hasMany(Carrito, { foreignKey: { name: 'producto_id', allowNull: false }});
Carrito.belongsTo(Producto, { foreignKey: 'producto_id'});

Usuario.hasMany(Carrito, { foreignKey: { name: 'usuario_id', allowNull: false }});
Carrito.belongsTo(Usuario, { foreignKey: 'usuario_id'});

Usuario.hasMany(CabeceraVenta, { foreignKey: { name: 'usuario_id', allowNull: false }});
CabeceraVenta.belongsTo(Usuario, { foreignKey: 'usuario_id'});

CabeceraVenta.hasMany(DetalleVenta, { foreignKey: { name: 'cabventa_id', allowNull: false }});
DetalleVenta.belongsTo(CabeceraVenta, { foreignKey: 'cabventa_id'});

module.exports = {
    conexion,
    Producto,
    Usuario,
    Categoria,
    Marca,
    Carrito,
    CabeceraVenta,
    DetalleVenta
}