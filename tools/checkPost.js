const {PK} = require('../config');

function checkPost(req,res,next){
    const key = req.get('Authorization');
    console.log(key);
    if(key === PK){
        next();
    }
    else{
        return res.json({
            status:400,
            message:'Unathorized'
        });
    }
}

module.exports = {checkPost};