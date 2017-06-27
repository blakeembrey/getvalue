const _hasOwnProperty = Object.prototype.hasOwnProperty

export type Path = Array<string | number | symbol>

export function get <T = any> (obj: any, path: Path, defaultValue: T): T
export function get <T = any> (obj: any, path: Path, defaultValue?: T): T | undefined
export function get <T = any> (obj: any, path: Path, defaultValue?: T): T | undefined {
  let res = obj

  for (const key of path) {
    if (res == null || !_hasOwnProperty.call(res, key)) {
      return defaultValue
    }

    res = res[key]
  }

  return res
}
