const { hashPassword } = require('@feathersjs/authentication-local').hooks
const sendResult = require('../../../hooks/sendResult')

//  Set default creation values
async function create (context) {
  // Check if admin exist
  return await context.service.find({
    query: {
      login: context.data.login
    }
  })
    .then((admins) => {
      if (admins.total === 1) {
        throw new Error(context.data.login + ' user already exist');
      } else {
        context.data.online = false

        if (context.data.login !== 'admin') {
          context.data.admin = false
          context.data.nickname = ''
          context.data.latitude = 0
          context.data.longitude = 0
        } else {
          context.data.admin = true
          context.data.nickname = 'Administrator'
          context.data.login = 'admin'
          context.data.password = 'admin'
        }

      return context
      }
    })
}

function sendUserBack (context) {
  const message = {
    method: context.method,
    service: '/' + context.path
  }

  if (context.result) {
    message.data = context.data
    context.app.service('/api/system/messages').sendToUser(context.result._id, message, context.params.socket)
  }
}

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [create, hashPassword('password')],
    update: [hashPassword('password')],
    patch: [hashPassword('password')],
    remove: []
  },

  after: {
    all: [],
    find: [sendResult],
    get: [sendResult],
    create: [sendResult],
    update: [sendResult, sendUserBack],
    patch: [sendResult, sendUserBack],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}
