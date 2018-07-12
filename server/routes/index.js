
exports.setRoutes = app => {
  app.use(require('./user').routes())
}