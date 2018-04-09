const Sequelize=require('Sequelize');

const db=new Sequelize(
    'shopsampledb',
    'shopadmin',
    'shoppass',

{
    host:'localhost',
    dialect:'mysql'

})
const Product=db.define('product', {
    name: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false
    },
    price: {
        type: Sequelize.DataTypes.FLOAT
    }

})
db.sync().then(()=>{ console.log('DB ready')});


module.exports={
    Product
}