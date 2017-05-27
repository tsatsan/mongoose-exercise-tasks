const Task = require('../../../models/Task')

function getCompleted (req, res) {
  Task.find({completed: true})
      .then(tasks => {
        res.render('completed', { tasks })
      })
    .catch(err => {
      res.json(err)
    })
}
module.exports = getCompleted
