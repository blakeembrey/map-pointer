# Map Pointer

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

> Map from one object to another using JSON pointers.

## Installation

```sh
npm install map-pointer --save
```

## Usage

### Arguments

1. `schema` (object, string or array) The schema to map onto
2. `input` (any) The input object to select from

### Example

```js
import { map } from 'map-pointer'

const schema = {
  sub: '/id',
  name: '/full_name'
}

const input = {
  id: 123,
  full_name: 'Blake Embrey'
}

map(schema, input) //=> { sub: 123, name: 'Blake Embrey' }
```

## License

Apache 2.0

[npm-image]: https://img.shields.io/npm/v/map-pointer.svg?style=flat
[npm-url]: https://npmjs.org/package/map-pointer
[downloads-image]: https://img.shields.io/npm/dm/map-pointer.svg?style=flat
[downloads-url]: https://npmjs.org/package/map-pointer
[travis-image]: https://img.shields.io/travis/blakeembrey/map-pointer.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/map-pointer
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/map-pointer.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/map-pointer?branch=master
