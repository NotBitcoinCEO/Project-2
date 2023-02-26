const router = require('express').Router();
// const hobbit = require('../models/subscriber')



//routes
router.post('/add/hobbit', (req, res) => {
    const {hobbit} = req.body;
    Console.log(hobbit);

})


module.exports = router