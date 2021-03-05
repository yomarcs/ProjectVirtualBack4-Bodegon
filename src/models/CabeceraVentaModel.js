const { DataTypes } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = cabecera_venta_model = conexion => conexion.define('cabeceraVentas', {
        cabeceraVentaId: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            field: 'cabventa_id',
            allowNull: false
        },
        cabeceraVentaFecha: {
            type: DataTypes.DATE,
            field: 'cabventa_fecha',
            defaultValue: Sequelize.NOW
        },
        cabeceraVentaSubtotal: {
            type: DataTypes.DECIMAL(6,2),
            field: 'cabventa_subtotal'
        },
        cabeceraVentaIGV: {
            type: DataTypes.DECIMAL(6,2),
            field: 'cabventa_igv'
        },
        cabeceraVentaTotal: {
            type: DataTypes.DECIMAL(7,2),
            field: 'cabventa_total'
        }
    },{
        tableName: 't_cabventa',
        timestamps: false
    });