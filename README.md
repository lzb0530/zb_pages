# zb_pages

[![Build Status][actions-img]][actions-url]
[![Coverage Status][codecov-img]][codecov-url]
[![License][license-img]][license-url]
[![NPM Downloads][downloads-img]][downloads-url]
[![NPM Version][version-img]][version-url]
[![Dependency Status][dependency-img]][dependency-url]
[![devDependency Status][devdependency-img]][devdependency-url]
[![Code Style][style-img]][style-url]

> static web app workflow

## Installation

```shell
$ npm install zb_pages

# or yarn
$ yarn add zb_pages
```

## Usage

<!-- TODO: Introduction of Usage -->

```javascript
const zbPages = require('zb_pages')
const result = zbPages('w')
// result => 'w@zce.me'
```

## API

<!-- TODO: Introduction of API -->

### zbPages(input, options?)

#### input

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

## Related

- [zce/caz](https://github.com/zce/caz) - A simple yet powerful template-based Scaffolding tools.

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; [刘子彬](https://github.com/lzb0530)



[actions-img]: https://img.shields.io/github/workflow/status/lzb0530/zb_pages/CI
[actions-url]: https://github.com/lzb0530/zb_pages/actions
[codecov-img]: https://img.shields.io/codecov/c/github/lzb0530/zb_pages
[codecov-url]: https://codecov.io/gh/lzb0530/zb_pages
[license-img]: https://img.shields.io/github/license/lzb0530/zb_pages
[license-url]: https://github.com/lzb0530/zb_pages/blob/master/LICENSE
[downloads-img]: https://img.shields.io/npm/dm/zb_pages
[downloads-url]: https://npm.im/zb_pages
[version-img]: https://img.shields.io/npm/v/zb_pages
[version-url]: https://npm.im/zb_pages
[dependency-img]: https://img.shields.io/david/lzb0530/zb_pages
[dependency-url]: https://david-dm.org/lzb0530/zb_pages
[devdependency-img]: https://img.shields.io/david/dev/lzb0530/zb_pages
[devdependency-url]: https://david-dm.org/lzb0530/zb_pages?type=dev
[style-img]: https://img.shields.io/badge/code_style-standard-brightgreen
[style-url]: https://standardjs.com
