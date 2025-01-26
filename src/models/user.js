'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt')

const { SALT } = require('../config/ServerConfig')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Role , {
        through : 'User_Roles'
      })
    }
  }
  User.init({
    Email: {type :DataTypes.STRING,
      allowNull : false ,
      unique : true ,
      validate : {
        isEmail : true
      }
    },
    Password:{ type :  DataTypes.STRING,
      allowNull : false,
      validate : {
        len : [7,100],
        isAlphanumeric : true
      }
     }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user) => {
    const hash = bcrypt.hashSync(user.Password , SALT)
    user.Password = hash;

  })
  return User;
};