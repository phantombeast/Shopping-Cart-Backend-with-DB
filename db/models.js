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

});

const User = db.define('user', {
    username: {
        type: Sequelize.DataTypes.STRING(25),
        unique: true,
        allowNull: false,
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    }
});

db.sync().then(()=>{ console.log('DB ready')});


module.exports={
    Product,User
}