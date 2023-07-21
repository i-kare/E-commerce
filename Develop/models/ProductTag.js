const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // integer
      allowNull: false, // doesn't allow null values
    },
    product_id: {
      type: DataTypes.INTEGER, // integer
      allowNull: false, // doesn't allow null values
    },
    tag_id: {
      type: DataTypes.INTEGER, // integer
      allowNull: false, // doesn't allow null values
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
