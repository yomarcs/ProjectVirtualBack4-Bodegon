const { DataTypes } = require('sequelize');

module.exports = usuario_model = conexion => conexion.define('usuarios',{
        usuarioId: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            field: 'usuario_id',
            allowNull: false
        },
        usuarioNombre: {
            type: DataTypes.STRING(150),
            field: 'usuario_nombre',
            unique: true,
            allowNull: false
        },
        usuarioCorreo: {
            type: DataTypes.STRING(40),
            field: 'usuario_correo',
            unique: true,
            allowNull: true,
            validate: {
                isEmail: true,
                len: [10,40]
            }
        },
        usuarioDireccion: {
            type: DataTypes.STRING(255),
            field: 'usuario_direccion'
        },
        usuarioTelefono: {
            type: DataTypes.STRING(15),
            field: 'usuario_telefono',
            unique: true
        },
        usuarioContrasena: {
            type: DataTypes.STRING(255),
            field: 'usuario_contrasena'
        },
        usuarioImagen: {
            type: DataTypes.STRING(255),
            field: 'usuario_imagen'
        }
    },{
        tableName: 't_usuario',
        timestamps: false
    });
