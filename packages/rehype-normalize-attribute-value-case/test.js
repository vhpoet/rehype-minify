'use strict'

/* eslint-disable import/no-extraneous-dependencies */
var test = require('tape')
var rehype = require('rehype')
var h = require('hastscript')
/* eslint-enable import/no-extraneous-dependencies */

var min = require('.')

test('rehype-normalize-attribute-value-case', function(t) {
  t.deepEqual(
    rehype()
      .use(min)
      .runSync(h('form', {id: 'FOO', method: 'GET'})),
    h('form', {id: 'FOO', method: 'get'})
  )

  t.deepEqual(
    rehype()
      .use(min)
      .runSync(h('form', {method: true})),
    h('form', {method: true})
  )

  t.deepEqual(
    rehype()
      .use(min)
      .runSync(h('form', {acceptCharset: ['UTF8', 'UTF-8']})),
    h('form', {acceptCharset: ['utf8', 'utf-8']})
  )

  t.end()
})
