require('dotenv').config()
const cors = require('cors')
const path = require('path')
const express = require('express')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)

app.listen(process.env.PORT)