const express = require('express')
const cors = require('cors')
const app = express()

require('dotenv').config()
require('./components/config/mongo')

const personRouter = require('./components/persons/router')

const errorHandler = require('./components/middleware/error')
const logger = require('./components/middleware/logger')

app.use(cors())
app.use(express.json())
app.use(logger)

app.use('/rest', personRouter)

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server started and listening for HTTP request at PORT ${PORT}`)
})