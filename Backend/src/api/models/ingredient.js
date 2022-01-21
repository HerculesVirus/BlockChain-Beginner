const mongoose = require('mongoose')

const ingredientSchema  = new mongoose.Schema({
    //( string memory ingredientTokenURI, uint256 price, address artist, uint256 ingType, uint256 totalCount, string memory name)
    ingredientTokenURI :{
        type : String,
        required : true
    },
    price : {
        type : Number ,
        required : true
    },
    artist : {
        type : String ,
        required : true
    },
    ingType:{
        type : Number , 
        required : true
    },
    quantity : {
        type : Number ,
        required : true
    },
    name :{
        type : String,
        required : true
    },
    _ingredientId : {
        type : String , 
        required : true
    }
})

const Ingredient = mongoose.model('Ingredient' , ingredientSchema )
module.exports = Ingredient