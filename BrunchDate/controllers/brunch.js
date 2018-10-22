// Requirements:
const Brunch = require('../models/Brunch')

const brunchController = {

    // Index:
    index: (req, res) => {
        Brunch.find()
            .then((brunch) => {
                res.render('brunch/index', {
                    brunch: brunch
                })
            })
    },

    // New:
    new: (req, res) => {
        res.render('brunch/new')
    },

    // Show:
    show: (req, res) => {
        Brunch.findById(req.params.id)
            .then((brunch) => {
                res.render('brunch/show', {
                    brunch: brunch
                })
            })
    },

    // Create:
    create: (req, res) => {
        Brunch.create(req.body)
        .then((newBrunch) => {
            res.redirect(`/${newBrunch._id}`)
        })
    },

    // Update:

    // Delete:
    delete: (req, res) => {
        Brunch.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect('/')
        })
    }
}
// Exports:
module.exports = brunchController