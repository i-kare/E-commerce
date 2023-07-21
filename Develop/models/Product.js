// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // integer
      allowNull: false, // doesn't allow null values
    },
    product_name: {
      type: DataTypes.STRING, // string
      allowNull: false, // doesn't allow null values
    },
    price: {
      type: DataType.DECIMAL, // decimal
      allowNull: false, // doesn't allow null values
    },
    stock: {
      type: DataTypes.INTEGER, // integer
      allowNull: false, // doesn't allow null values
    },
    category_id: { 
      type: DataTypes.INTEGER, // integer
      allowNull: false, // doesn't allow null values
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
