const path = require('path')
const NeDB = require('nedb')

module.exports = function (app) {
  const Model = new NeDB({
    filename: path.join(app.get('homePath'), 'db', 'quest_paths.db'),
    autoload: true
  })

  return Model
}
