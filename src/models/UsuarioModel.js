const { DataTypes } = require('sequelize');

module.exports = usuario_model = conexion => conexion.define('usuarios',{
        usuarioId: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            field: 'usu_id',
            allowNull: false
        },
        usuarioCorreo: {
            type: DataTypes.STRING(150),
            field: 'usuario_correo',
            validate: {
                isEmail: true
            }
        },
        usuarioNombre: {
            type: DataTypes.STRING(150),
            field: 'usuario_nombre',
            unique: true
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
