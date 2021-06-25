import {
  feathersClient,
  makeServicePlugin,
  BaseModel
} from '../../plugins/feather'

const serviceName = '/api/management/users'

// Extend the base class
class Users extends BaseModel {
  static modelName = serviceName
}

const servicePlugin = makeServicePlugin({
  Model: Users,
  service: feathersClient.service(serviceName),
  serviceName,
  idField: '_id'
})

// Optionally add service-level hooks, here:
feathersClient.service(serviceName).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
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
})

export default servicePlugin
