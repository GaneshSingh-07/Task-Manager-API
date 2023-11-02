const express = require('express')
const control = require('../controller/control')
const router = express.Router()

router.route('/').get(control.getAllTask).post(control.addTask)
router.route('/:name').get(control.singleTask).patch(control.updateTask).delete(control.deleteTask)

module.exports = router