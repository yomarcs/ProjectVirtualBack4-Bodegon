const { DataTypes } = require('sequelize');

module.exports = lista_carrito_model = conexion => conexion.define('listaCarritos', {
        listaCarritoId: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            field: 'lista_carrito_id',
            allownull: false
        },
        listaCarritoTipo: {
            type: DataTypes.STRING(50),
            field: 'lista_carrito_tipo'
        },
        listaCarritoCantidad: {
            type: DataTypes.INTEGER,
            field: 'lista_carrito_cantidad'
        }
    },{
        tableName: 't_lista_carrito',
        timestamps: false
    });
