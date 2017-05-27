const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const addTask = require('./handlers/addTask')
const getCompleted = require('./handlers/getCompleted')

router.get('/', getAll)
router.get('/completed', getCompleted)
router.post('/', addTask)

module.exports = router
