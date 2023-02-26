const router = require('express').Router()



//routes
router.post('/add/hobbit', (req, res) => {
    const {hobbit} = req.body;
    Console.log(hobbit);

})


module.exports = router