'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sensors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sensors.init({
    serial: DataTypes.STRING,
    swVersion: DataTypes.STRING,
    temperature: DataTypes.STRING,
    date: DataTypes.STRING,
    gps: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sensors',
  });
  return Sensors;
};