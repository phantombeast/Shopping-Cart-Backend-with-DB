const express = require('express');
const path = require('path')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'hbs')


app.use('/products', require('./routes/products'))

app.use('/', express.static( path.join(__dirname, 'public')));

app.listen(9899,()=>{
    console.log('Server stayr at http://localhost:9899')
})