const express = require('express')
const router = express.Router()

const removeById = require('./handlers/removeById')
const updateById = require('./handlers/updateById')
const editTask = require('./handlers/editTask')

router.delete('/:id', removeById)
router.put('/:id', updateById)
router.put('/user/:id', editTask)

module.exports = router
