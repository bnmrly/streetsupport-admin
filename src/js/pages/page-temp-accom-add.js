import '../common'
require.ensure(['knockout', '../models/temporary-accommodation/add'], (require) => {
  const ko = require('knockout')
  const Model = require('../models/temporary-accommodation/add')
  const model = new Model()
  ko.applyBindings(model)
  model.init()
})
