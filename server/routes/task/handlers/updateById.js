const Task = require('../../../models/Task')

function updateById (req, res) {
  const { id } = req.params

  const updateData = {}

  updateData.completed = true 
  updateData.updateAdd = +new Date() 

  Task.findByIdAndUpdate(id, updateData)
    .then(msg => {
      res.json(msg)
    })
    .catch(err => {
      res.json(err)
    })
}

module.exports = updateById
