const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        //id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // must be at least 8 characters long
                len: [8]
            }
        }
    },
    {
        // TABLE CONFIGURATION OPTIONS

        //imported sequelize connection
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;