const mongoose = require('mongoose');
//variant options array of options
const variantSchema = mongoose.Schema({
    item_code:{type:String, required:true},
    variant_price:{type:String,required:true},
    variant_option:{type:String, required:true}
},{_id:false});

const productSchema = mongoose.Schema({
    title:{type:String, required:true,unique:true},
    img_url:{type:String,required:true},
    variant_options:{type:Array,required:true},
    variants:[variantSchema]
},{minimize:false});

productSchema.methods.serialize = function(){
    return{
        title:this.title,
        img_url:this.img_url,
        variants: this.variants
    }
};

const Products = mongoose.model("Product",productSchema);

module.exports = {Products};