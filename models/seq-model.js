const sequelize= require('sequelize');
const db =require('../config/sequelize');

const mod= db.define('users',{
    id:{
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: sequelize.STRING
    },
    mobile:{
        type: sequelize.STRING
    },
    email:{
        type: sequelize.STRING
    },
    password:{
        type: sequelize.STRING
    },
    confpassword:{
        type: sequelize.STRING
    }
  }, {
    timestamps: false,
    underscored: true,
    freezeTableName: true
  }
)
module.exports=mod;