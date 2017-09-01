# koa-error-catcher
[![Build Status](https://travis-ci.org/dengyaolong/koa-error-catcher.png)](https://travis-ci.org/dengyaolong/koa-error-catcher)
[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/koa-error-catcher.svg?style=flat-square
[npm-url]: https://npmjs.org/package/koa-error-catcher]
[download-image]: https://img.shields.io/npm/dm/koa-error-catcher.svg?style=flat-square
[download-url]: https://npmjs.org/package/koa-error-catcher


A koa2 middleware to catch error and set response

# Install
```
npm install koa-error-catcher
```

# Usage
```
const Koa = require('koa');
const app = new Koa();
const errorCatcher = require('koa-error-catcher');

// error catcher 
app.use(errorCatcher);

app.use(ctx => {
    ctx.throw('throw an error')
    ctx.body = {ok: 1}
});

app.listen(3030);

//  curl -v 127.0.0.1:3030
//  response 500 & body is {"message":"throw an error"}
```
