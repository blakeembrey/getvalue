const _hasOwnProperty = Object.prototype.hasOwnProperty

export type Path = Array<string | number | symbol>

export function get <T> (obj: any, path: Path, defaultValue?: T): T {
  let res = obj

  for (const key of path) {
    if (res == null || !_hasOwnProperty.call(res, key)) {
      return defaultValue
    }

    res = res[key]
  }

  return res
}
