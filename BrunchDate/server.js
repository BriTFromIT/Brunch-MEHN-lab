
//= =====================
// REQUIREMENTS
//= =====================
// require express, method-override, morgan (logging tool), and our routes 
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const logger = require('morgan')
const routes = require('./routes/index')



//= =====================
// MIDDLEWARE
//= =====================
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))

// Logger provides extra information in our Node console about each request being made.
app.use(logger('dev'))

//= =====================
// Router
//= =====================
// Links the server to our Router File
app.use('/', routes)


//= =====================
// LISTENERS
const PORT = process.env.PORT || 3000
app.listen (PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`)
})

// anothe way of doing this is
// app.listen(PORT, () => {
// console.log('Express server is listening on port 3000' })



//= =====================


// updated folder structure  
// updated folder structure 2

// installed express, handlebars, and mongoose
