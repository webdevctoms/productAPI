const express = require('express');
const router = express.Router();
const {checkKey} = require('../tools/checkKey');

router.get('/',checkKey,(req,res)=>{
    return res.json({
        status:200,
        message:'good'
    });
});

module.exports = {router};