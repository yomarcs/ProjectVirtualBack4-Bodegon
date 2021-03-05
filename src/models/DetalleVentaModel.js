const { DataTypes } = require('sequelize');

module.exports = detalle_venta_model = conexion => conexion.define('detalleVentas', {
        detalleVentaId: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            field: 'detventa_id',
            allowNull: false
        },
        detalleVentaCantidad: {
            type: DataTypes.INTEGER,
            field: 'detventa_cantidad'
        },
        detalleVentaPrecio: {
            type: DataTypes.DECIMAL(6,2),
            field: 'detventa_precio'
        },
        detalleVentaTotal: {
            type: DataTypes.DECIMAL(7,2),
            field: 'detventa_total'
        }
    },{
        tableName: 't_detventa',
        timestamps: false
    });