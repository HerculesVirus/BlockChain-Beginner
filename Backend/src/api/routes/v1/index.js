const router = require('express').Router();
//Admin Routes.................
//Recipies Routes
const Recipies = require('./receipe.routes')
router.use('/receipies',Recipies)
//Site ....

module.exports = router;