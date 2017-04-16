object-assgin
=====

ES2015 `Object.assgin` implementation according to [ecma262](https://tc39.github.io/ecma262/#sec-object.assign).

## Usage

```js
const objectAssign = require('object-assign')

// signle source
objectAssgin({}, { 'a': 'a' })
// => { 'a': 'a' }

// multiply sources
objectAssgin({}, { 'a': 'a' }, { 'b': 'b' }, { 'c': 'c' })
// => { 'a': 'a', 'b': 'b', 'c': 'c' }
```

## License

MIT &copy; [BinRui.Guan](mailto:differui@gmail.com)
