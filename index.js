const debug = require('debug')('koa-error-catcher')

module.exports =  async (ctx, next) => {
  const env = process.env.NODE_ENV || 'development'
  try {
    await next()
    if (404 === ctx.response.status && !ctx.response.body) {
      var error = Error('Not found');
      error.status = 404;
      throw error;
    }
  } catch (e) {
    ctx.response.status = e.status || 500;
    ctx.response.body = {};
    ctx.response.body.message = e.message;
    if (process.env.NODE_ENV === 'production') {
      ctx.response.body.stack = e.stack;
    }
    debug(e);
  }
}
