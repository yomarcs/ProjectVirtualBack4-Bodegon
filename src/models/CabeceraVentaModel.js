const { DataTypes } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = cabecera_venta_model = conexion => conexion.define('cabeceraVentas', {
        cabeceraId: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            field: 'cabecera_id',
            allowNull: false
        },
        cabeceraFecha: {
            type: DataTypes.DATE,
            field: 'cabecera_fecha',
            defaultValue: Sequelize.NOW
        },
        cabeceraSubtotal: {
            type: DataTypes.DECIMAL(6,2),
            field: 'cabecera_subtotal'
        },
        cabeceraIGV: {
            type: DataTypes.DECIMAL(6,2),
            field: 'cabecera_igv'
        },
        cabeceraTotal: {
            type: DataTypes.DECIMAL(7,2),
            field: 'cabecera_total'
        }
    },{
        tableName: 't_cabecera_venta',
        timestamps: false
    });