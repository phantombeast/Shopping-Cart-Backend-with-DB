const router=require('express').Router()

const {Product}=require('../db/models');

router.get('/',(req,res)=>{
    Product.findAll()
        .then((products)=>{ res.json(products)})
        .catch((err)=>{ res.send(err.message)})
})

router.post('/',(req,res)=>{
    Product.create({
        name: req.body.name,
        price:req.body.price
    })
        .then((createProducts)=>{ res.json(createProducts)})
        .catch((err)=>{ res.send(err.message)})
})

module.exports=router