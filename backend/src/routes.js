const routes = require('express').Router()
const multer = require('multer')
const uploadConfig = require('./config/upload')

const SessionController = require('./Controllers/SessionController')
const SpotController = require('./Controllers/SpotController')
const DashboardController = require('./Controllers/DashboardController')
const BookingController = require('./Controllers/BookingController')

const upload = multer(uploadConfig)

routes.post('/session', SessionController.store)

routes.post('/spots', upload.single('thumbnail'), SpotController.store)
routes.get('/spots', SpotController.index)

routes.get('/dash', DashboardController.show)

routes.post('/spots/:spot_id/bookings', BookingController.store)

module.exports = routes