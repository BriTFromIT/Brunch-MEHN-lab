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

router.get('/brunch', brunchController.index)
router.get('/user', userController.index)


//= =====================
// NEW
//= =====================
// Create a GET new route "/new" that triggers the donut controller new function

router.get('/brunch/new', userController.new)
router.get('/user/new', userController.new)

//= =====================
// SHOW
//= =====================
// Create a GET show route "/:id" that triggers the donut controller show function

router.get('/brunch/:id', brunchController.show)
router.get('/user/:id', userController.show)


//= =====================
// CREATE
//= =====================
// Create a POST index route "/" that triggers the donut controller create function
router.post('/brunch', brunchController.create)
router.post('/user', userController.create)

// create: (req, res) => {
//     res.send('hello')
// }

//= =====================
// EDIT
//= =====================
// Create a GET edit route "/:id/edit" that triggers the donut controller edit function

router.get('/brunch/:id/edit', brunchController.edit)
router.get('/user/:id/edit', userController.edit)


//= =====================
// UPDATE
//= =====================
// Create a PUT update route "/:id" that triggers the donut controller update function
router.put('/:id', brunchController.update)
router.put('/user/:id', userController.update)

// Create a PATCH update route "/:id" that triggers the donut controller update function
router.patch('/brunch/:id', brunchController.update)
router.patch('/user/:id', userController.update)
//= =====================
// DELETE
//= =====================
// Create a DELETE delete route "/:id" that triggers the donut controller delete function

router.delete('/brunch/:id', brunchController.delete)
router.delete('/user/:id', userController.delete)

module.exports = router