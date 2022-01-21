const express = require('express')
const controller = require("../../controllers/Ingredient.controller")

const router = express.Router();

router.route('/addIngredients').post(controller.create)

module.exports = router;