# koa-error-catcher
a koa2 middleware to catch error and set response

# Install
```
npm install koa-error-catcher
```

# Usage
const Koa = require('koa');
const app = new Koa();
const errorCatcher = require('koa-error-catcher');

// response
app.use(errorCatcher);

app.use(ctx => {
    ctx.throw('throw an error')
    ctx.body = {ok: 1}
});

app.listen(3030);

//  curl -v 127.0.0.1:3030
//  response 500 & body is {"message":"throw an error"}
