const { DataTypes } = require('sequelize');

module.exports = carrito_model = conexion => conexion.define('Carritos', {
        CarritoId: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            field: 'carrito_id',
            allownull: false
        },
        CarritoTipo: {
            type: DataTypes.STRING(50),
            field: 'carrito_tipo'
        },
        CarritoCantidad: {
            type: DataTypes.INTEGER,
            field: 'carrito_cantidad'
        }
    },{
        tableName: 't_carrito',
        timestamps: false
    });
