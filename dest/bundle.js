'use strict';

function toObject(target) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object')
  }

  return Object(target)
}

function assign(target) {
  var sources = [], len$1 = arguments.length - 1;
  while ( len$1-- > 0 ) sources[ len$1 ] = arguments[ len$1 + 1 ];

  var to = toObject(target);
  var len = sources.length;

  for (var i = 0; i < len; i += 1) {
    var nextSource = sources[i];
    var from = (void 0), keys = (void 0), keysLen = (void 0);

    if (nextSource == null) {
      keys = [];
    } else {
      from = toObject(nextSource);
      keys = Object.getOwnPropertyNames(from);

      if (Object.getOwnPropertySymbols) {
        keys = keys.concat(Object.getOwnPropertySymbols(from));
      }
    }
    keysLen = keys.length;

    for (var j = 0; j < keysLen; j += 1) {
      var nextKey = keys[j];
      var desc = Object.getOwnPropertyDescriptor(from, nextKey);

      if (desc !== undefined && desc.enumerable) {
        to[nextKey] = from[nextKey];
      }
    }
  }

  return to
}

module.exports = assign;
