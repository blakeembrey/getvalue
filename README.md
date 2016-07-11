# Getvalue

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

> Get a nested value from an object by path.

## Installation

```sh
npm install getvalue --save
```

## Usage

### Arguments

1. `object` (Object) The object to query
2. `path` (Array) The path of the property to get
3. (Optional) `defaultValue` (any) The value returned for `undefined` resolved values

### Example

```js
import { get } from 'getvalue'

const obj = { a: { b: { c: 10 } } }

get(obj, ['a', 'b', 'c']) //=> 10
get(obj, ['not', 'here']) //=> undefined
get(obj, ['or', 'here'], 1) //=> 1
```

## License

Apache 2.0

[npm-image]: https://img.shields.io/npm/v/getvalue.svg?style=flat
[npm-url]: https://npmjs.org/package/getvalue
[downloads-image]: https://img.shields.io/npm/dm/getvalue.svg?style=flat
[downloads-url]: https://npmjs.org/package/getvalue
[travis-image]: https://img.shields.io/travis/blakeembrey/getvalue.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/getvalue
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/getvalue.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/getvalue?branch=master
