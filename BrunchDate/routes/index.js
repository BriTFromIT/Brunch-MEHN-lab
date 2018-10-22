let express = require('express')
let router = express.Router()
const brunchController = require('../controllers/brunch')
const userController = require('../controllers/user')

// Example Route
// router.get('/', someController.index)




//= =====================
// INDEX
//= =====================
// Create a GET index route "/" that triggers the donut controller index function

router.get('/', function(req,res){
    res.send("testing")
})
router.get('/', function(req,res){
res.send("tsting")
})


//= =====================
// NEW
//= =====================
// Create a GET new route "/new" that triggers the donut controller new function

// router.get('/new', brunchController.new)
// router.get('/new', userController.new)

//= =====================
// SHOW
//= =====================
// Create a GET show route "/:id" that triggers the donut controller show function

// router.get('/:id', brunchController.show)
// router.get('/:id', userController.show)


//= =====================
// CREATE
//= =====================
// Create a POST index route "/" that triggers the donut controller create function
<<<<<<< HEAD


// router.post('/', brunchController.create)
// router.post('/', userController.create)
=======
router.post('/brunch', brunchController.create)
router.post('/user', userController.create)
>>>>>>> 8097ca289fb9f955fabfc473da52649f023336bb

// create: (req, res) => {
//     res.send('hello')
// }

//= =====================
// EDIT
//= =====================
// Create a GET edit route "/:id/edit" that triggers the donut controller edit function

<<<<<<< HEAD
// router.get('/:id/edit', brunchController.edit)
// router.get('/:id/edit', userController.edit)
=======
router.get('/brunch/:id/edit', brunchController.edit)
router.get('/user/:id/edit', userController.edit)
>>>>>>> 8097ca289fb9f955fabfc473da52649f023336bb


//= =====================
// UPDATE
//= =====================
// Create a PUT update route "/:id" that triggers the donut controller update function
<<<<<<< HEAD

// router.put('/:id', brunchController.update)
// router.put('/:id', userController.update)

// Create a PATCH update route "/:id" that triggers the donut controller update function


// router.patch('/:id', brunchController.update)
// router.patch('/:id', userController.update)


=======
router.put('/:id', brunchController.update)
router.put('/user/:id', userController.update)

// Create a PATCH update route "/:id" that triggers the donut controller update function
router.patch('/brunch/:id', brunchController.update)
router.patch('/user/:id', userController.update)
>>>>>>> 8097ca289fb9f955fabfc473da52649f023336bb
//= =====================
// DELETE
//= =====================
// Create a DELETE delete route "/:id" that triggers the donut controller delete function

<<<<<<< HEAD
// router.delete('/:id', brunchController.delete)
// router.delete('/:id', userController.delete)
=======
router.delete('/brunch/:id', brunchController.delete)
router.delete('/user/:id', userController.delete)
>>>>>>> 8097ca289fb9f955fabfc473da52649f023336bb

module.exports = router