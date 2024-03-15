const {Sequelize,Model,DataTypes} = require('sequelize')
const {sequelize} = require('./connect')

const Payment = sequelize.define("Payment",{
  amount:{
    type:DataTypes.STRING,
    allowNull:false,
  },  
  duration:{
    type:DataTypes.STRING,
    allowNull:false,
  },  
  date:{
    type: DataTypes.DATE,
    defaultValue:DataTypes.NOW
  }  
})

module.exports = Payment