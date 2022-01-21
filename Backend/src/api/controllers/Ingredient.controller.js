//Load Model
const ingredient = require("../models/ingredient")
//Procedures

exports.create = async (req,res) =>{
    console.log(`POST API HIT`)
    console.log(req.body)
    
    const addIngredient = new ingredient();
    addIngredient.ingredientTokenURI = req.body.token;
    addIngredient.price    = req.body.price;
    addIngredient.artist   = req.body.artist;
    addIngredient.ingType  = req.body.inType;
    addIngredient.quantity = req.body.quantity;
    addIngredient.name     = req.body.name;
    addIngredient._ingredientId = req.body._ingredientId;
    await addIngredient.save()

    return res.json({message : "create is in Progress"})
    
}
