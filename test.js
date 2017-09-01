'use strict'

import test from 'ava'
import Koa from 'koa'
import request from 'supertest'

import errorCatch from '.'

const createApp = function (route) {
    const app = new Koa()
    app.use(errorCatch)
    app.use(route)
    return app
}

test('catch error response 500', async t => {
    const app = createApp(ctx => {
        ctx.throw(500, 'throw an error')
    })
    const res = await request(app.listen())
        .get('/')
        .expect(500)
    t.truthy(res) 
    t.deepEqual(res.body, {message: "throw an error"})
})
