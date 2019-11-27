const express = require('express');
const router = express.Router();
const {checkKey} = require('../tools/checkKey');
const {checkPost} = require('../tools/checkPost');
const {Products} = require('../models/productModel');

router.get('/',checkKey,(req,res)=>{
    return res.json({
        status:200,
        message:'good'
    });
});

router.post('/',checkPost,(req,res)=>{
    

    return res.json({
        status:200,
        message:'good'
    });
});


module.exports = {router};