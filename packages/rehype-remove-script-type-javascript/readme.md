<!--This file is generated by `build-packages.js`-->

# rehype-remove-script-type-javascript

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

Remove `type` and `language` on JavaScript scripts.

## Install

[npm][]:

```sh
npm install rehype-remove-script-type-javascript
```

## Example

##### In

```html
<script type="text/javascript"></script>
<script language="javascript1.5"></script>
```

##### Out

```html
<script></script>
<script></script>
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

[build-badge]: https://img.shields.io/travis/rehypejs/rehype-minify.svg

[build]: https://travis-ci.org/rehypejs/rehype-minify

[coverage-badge]: https://img.shields.io/codecov/c/github/rehypejs/rehype-minify.svg

[coverage]: https://codecov.io/github/rehypejs/rehype-minify

[downloads-badge]: https://img.shields.io/npm/dm/rehype-remove-script-type-javascript.svg

[downloads]: https://www.npmjs.com/package/rehype-remove-script-type-javascript

[size-badge]: https://img.shields.io/bundlephobia/minzip/rehype-remove-script-type-javascript.svg

[size]: https://bundlephobia.com/result?p=rehype-remove-script-type-javascript

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/rehype

[npm]: https://docs.npmjs.com/cli/install

[health]: https://github.com/rehypejs/.github

[contributing]: https://github.com/rehypejs/.github/blob/master/contributing.md

[support]: https://github.com/rehypejs/.github/blob/master/support.md

[coc]: https://github.com/rehypejs/.github/blob/master/code-of-conduct.md

[license]: https://github.com/rehypejs/rehype-minify/blob/master/license

[author]: https://wooorm.com
