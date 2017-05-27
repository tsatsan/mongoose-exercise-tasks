const Task = require('../../../models/Task')

function getAll (req, res) {
  Task.find({completed: false})
      .then(tasks => {
        res.render('tasks.pug', { tasks })
      })
    .catch(err => {
      res.json(err)
    })
}
module.exports = getAll
