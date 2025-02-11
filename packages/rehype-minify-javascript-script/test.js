'use strict'

/* eslint-disable import/no-extraneous-dependencies */
var test = require('tape')
var rehype = require('rehype')
var h = require('hastscript')
/* eslint-enable import/no-extraneous-dependencies */

var min = require('.')

test('rehype-minify-javascript-script', function(t) {
  t.deepEqual(
    rehype()
      .use(min)
      .runSync(
        h('script', 'var name = "World";\nconsole.log("Hello, " + name + "!");')
      ),
    h('script', 'var name="World";console.log("Hello, "+name+"!")')
  )

  t.deepEqual(
    rehype()
      .use(min)
      .runSync(
        h(
          'script',
          '(function () {var name = "World";\nconsole.log("Hello, " + name + "!");})()'
        )
      ),
    h('script', 'console.log("Hello, World!")')
  )

  t.deepEqual(
    rehype()
      .use(min)
      .runSync(h('script', {type: 'fooscript'}, 'var name = "World";')),
    h('script', {type: 'fooscript'}, 'var name = "World";')
  )

  t.deepEqual(
    rehype()
      .use(min)
      .runSync(h('script', {language: 'fooscript'}, 'var name = "World";')),
    h('script', {language: 'fooscript'}, 'var name = "World";')
  )

  t.end()
})
