const Router = require('koa-router');

const router = new Router({
  prefix: '/api/users'
});

router.post('/register', async (ctx, next) => {
  const {body} = ctx.request;

  console.log(body);
  ctx.body = body;
});

module.exports = router;