// part 1
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {sequelize} = require('./models')
const morgan = require('morgan')

// part 1
let app = express()
app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// part 2
require('./passport')

// part 1
require('./routes')(app)

// part 1
sequelize.sync()
  .then(() => {
    app.listen(process.env.PORT || 8081)
  })
