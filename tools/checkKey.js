const {KEY} = require('../config');

function checkKey(req,res,next){
    const key = req.get('Authorization');
    if(key === KEY){
        next();
    }
    else{
        return res.json({
            status:400,
            message:'Unathorized'
        });
    }
}

module.exports = {checkKey};