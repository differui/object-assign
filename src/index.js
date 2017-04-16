function toObject(target) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object')
  }

  return Object(target)
}

function assign(target, ...sources) {
  const to = toObject(target)
  const len = sources.length

  for (let i = 0; i < len; i += 1) {
    const nextSource = sources[i]
    let from, keys, keysLen

    if (nextSource == null) {
      keys = []
    } else {
      from = toObject(nextSource)
      keys = Object.getOwnPropertyNames(from)

      if (Object.getOwnPropertySymbols) {
        keys = keys.concat(Object.getOwnPropertySymbols(from))
      }
    }
    keysLen = keys.length

    for (let j = 0; j < keysLen; j += 1) {
      const nextKey = keys[j]
      const desc = Object.getOwnPropertyDescriptor(from, nextKey)

      if (desc !== undefined && desc.enumerable) {
        to[nextKey] = from[nextKey]
      }
    }
  }

  return to
}

export default assign
