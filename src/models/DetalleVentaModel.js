const { DataTypes } = require('sequelize');

module.exports = detalle_venta_model = conexion => conexion.define('detalleVentas', {
        detalleId: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            field: 'detalle_id',
            allowNull: false
        },
        detalleCantidad: {
            type: DataTypes.INTEGER,
            field: 'detalle_cantidad'
        },
        detallePrecio: {
            type: DataTypes.DECIMAL(6,2),
            field: 'detalle_precio'
        },
        detalleTotal: {
            type: DataTypes.DECIMAL(7,2),
            field: 'detalle_total'
        }
    },{
        tableName: 't_detalle_venta',
        timestamps: false
    });