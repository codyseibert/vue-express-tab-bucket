module.exports = class InvalidAccessError extends require('./AppError') {
  constructor () {
    super('You do not have permissions to access this resource.', 403);
  }
}
