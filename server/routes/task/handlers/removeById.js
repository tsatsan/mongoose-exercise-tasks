const Task = require('../../../models/Task')

function removeById(req, res) {

  const { id } = req.params

  Task.findByIdAndRemove(id)
    .then(msg => {
      res.render('tasks', { tasks })
    })
    .catch(err => {
      res.json(err)
    })
}

module.exports = removeById
