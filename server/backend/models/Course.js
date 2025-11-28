const {DataTypes} = require('sequelize');
const sequelize = require('../db')

const Course = sequelize.define('Course',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false
    }
})

module.exports = Course