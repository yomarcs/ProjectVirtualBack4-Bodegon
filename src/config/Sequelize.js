const { Sequelize } = require('sequelize');
const ProductoModel = require('../models/ProductoModel');
const UsuarioModel = require('../models/UsuarioModel');
const CategoriaModel = require('../models/CategoriaModel');
const MarcaModel = require('../models/MarcaModel');
const ListaCarritoModel = require('../models/ListaCarritoModel');
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
const ListaCarrito = ListaCarritoModel(conexion);
const CabeceraVenta = CabeceraVentaModel(conexion);
const DetalleVenta = DetalleVentaModel(conexion);

// Relaciones inversas
Categoria.hasMany(Producto, { foreignKey: 'categoria_id'});
Producto.belongsTo(Categoria, { foreignKey: 'categoria_id'});
Marca.hasMany(Producto, { foreignKey: 'marca_id'});
Producto.belongsTo(Marca, { foreignKey:'marca_id'});
Producto.hasMany(DetalleVenta, { foreignKey: 'producto_id'});
DetalleVenta.belongsTo(Producto, { foreignKey: 'producto_id'});
Producto.hasMany(ListaCarrito, { foreignKey: 'producto_id'});
ListaCarrito.belongsTo(Producto, { foreignKey: 'producto_id'});
Usuario.hasMany(ListaCarrito, { foreignKey: 'usuario_id'});
ListaCarrito.belongsTo(Usuario, { foreignKey: 'usuario_id'});
Usuario.hasMany(CabeceraVenta, { foreignKey: 'usuario_id'});
CabeceraVenta.belongsTo(Usuario, { foreignKey: 'usuario_id'});
CabeceraVenta.hasMany(DetalleVenta, { foreignKey: 'cabecera_id'});
DetalleVenta.belongsTo(CabeceraVenta, { foreignKey: 'cabecera_id'});

module.exports = {
    conexion,
    Producto,
    Usuario,
    Categoria,
    Marca,
    ListaCarrito,
    CabeceraVenta,
    DetalleVenta
}