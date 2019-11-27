const express = require('express');
const router = express.Router();
const {checkKey} = require('../tools/checkKey');
const {checkPost} = require('../tools/checkPost');
const {Products} = require('../models/productModel');

router.get('/',checkKey,(req,res)=>{

    return Products.find({})

    .then(products => {
        return res.json({
            status:200,
            products
        });
    })

    .catch(err => {
        console.log(err);
        return res.json({
            status:500,
            message:'Internal server error'
        });
    });
});

router.post('/',checkPost,(req,res)=>{
    const productData = req.body;
    console.log(productData);

    return Products.create(productData)

    .then(data => {
        return res.json({
            status:200,
            message:'Saved Data'
        });
    })

    .catch(err => {
        console.log(err);
        return res.json({
            status:500,
            message:'Internal server error'
        });
    });    
});


module.exports = {router};