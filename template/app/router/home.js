module.exports = app => {
  const namespace = app.router.namespace('/api/home');

  namespace.post('hello', '/hello', app.controller.home.hello);

};
