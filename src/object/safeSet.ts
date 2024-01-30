import { Path } from '../types'

export function safeSet<T, P extends Path<T>, V, ActualP extends string = P>(
  obj: T,
  path: ActualP,
  value: V
): boolean {
  const keys = (path as unknown as P).split('.') as string[]
  let result: any = obj

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]

    if (key === undefined) {
      return false
    }

    if (i === keys.length - 1) {
      result[key] = value
      return true
    } else if (result[key] === undefined) {
      result[key] = {}
    }

    result = result[key]
  }

  return false
}
