# rehype-preset-minify

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**rehype**][rehype] preset to minify HTML.

##### In

```html
<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="content-language" content="en-US">
    <script src="index.js" type="text/javascript" language="javascript">
      alert(true);
    </script>
    <link rel="stylesheet" href="index.css" type="text/css">
    <title>Foo  &amp;  bar</title>
  </head>
  <body>
    <h1 class="foo foo">bar  bar</h1>
    <p id="alfred" id="alfred">  <strong>foo</strong> <em>bar</em> </p>
    <button type="BUTTON" onclick="javascript:return false">Alpha</button>
  </body>
</html>
```

##### Out

```html
<!doctypehtml><html lang=en-US><meta charset=utf8><script src=index.js></script><link rel=stylesheet href=index.css><title>Foo &amp bar</title><h1 class=foo>bar bar</h1><p id=alfred><strong>foo</strong> <em>bar</em></p><button type=button onclick=return!1>Alpha</button>
```

## Install

[npm][]:

```sh
npm install rehype-preset-minify
```

## CLI

After installing, add the following to `.rehyperc` (or `package.json` under
`"rehype"`):

```js
{
  "plugins": [
    "preset-minify"
  ]
}
```

Then use [**rehype-cli**][cli]:

```sh
rehype src -o dist
```

## API

Use:

```js
var rehype = require('rehype')
var minify = require('rehype-preset-minify')

var doc = `<!doctype html>
<html>
  <head>
    <title>Hello</title>
  </head>
  <body>
    <h1>World!</h1>
  </body>
</html>
`

rehype()
  .use(minify)
  .process(doc, function(err, file) {
    if (err) throw err
    console.log(String(file))
  })
```

Yields:

```html
<!doctypehtml><title>Hello</title><h1>World!</h1>
```

## Contribute

See [`contributing.md`][contributing] in [`rehypejs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [Code of Conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/rehypejs/rehype-minify.svg

[build]: https://travis-ci.org/rehypejs/rehype-minify

[coverage-badge]: https://img.shields.io/codecov/c/github/rehypejs/rehype-minify.svg

[coverage]: https://codecov.io/github/rehypejs/rehype-minify

[downloads-badge]: https://img.shields.io/npm/dm/rehype-preset-minify.svg

[downloads]: https://www.npmjs.com/package/rehype-preset-minify

[size-badge]: https://img.shields.io/bundlephobia/minzip/rehype-preset-minify.svg

[size]: https://bundlephobia.com/result?p=rehype-preset-minify

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/rehype

[npm]: https://docs.npmjs.com/cli/install

[license]: https://github.com/rehypejs/rehype-minify/blob/master/license

[author]: https://wooorm.com

[health]: https://github.com/rehypejs/.github

[contributing]: https://github.com/rehypejs/.github/blob/master/contributing.md

[support]: https://github.com/rehypejs/.github/blob/master/support.md

[coc]: https://github.com/rehypejs/.github/blob/master/code-of-conduct.md

[rehype]: https://github.com/rehypejs/rehype

[cli]: https://github.com/rehypejs/rehype/tree/master/packages/rehype-cli
