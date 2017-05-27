const Task = require('../../../models/Task')

function editTask (req, res) {
  const { id } = req.params
  const { title } = req.body
  
  const updateData = {}
  const { editedValue } = req.body
  updateData.updateAdd = +new Date()
  updateData.title = editedValue


  Task.findByAndUpdate(id, updateData)
      .then(msg => {
      	res.json(msg)
      })
      .catch(err=> {
      	res.json(err)
      })
  }


module.exports = editTask