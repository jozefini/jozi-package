type StringOrNumber = string | number
type TransformFn = (v: any) => any

// Check if array has length
export function hasLength(items: any, length = 1, exact = false): boolean {
  return (
    Array.isArray(items) &&
    (exact ? items.length === length : items.length >= length)
  )
}

// Check if array has value
export function hasValue(
  items: any[],
  value: any,
  transformFn?: TransformFn
): boolean {
  return hasLength(items) && transformFn
    ? items.map(transformFn).includes(value)
    : items.includes(value)
}

// Check if array has values
export function hasValues(
  items: any[],
  values: any[],
  transformFn?: TransformFn
): boolean {
  const hasItems = hasLength(items)
  const _items = hasItems && transformFn ? items.map(transformFn) : items
  return (
    hasItems &&
    hasLength(values) &&
    values.every((value) => _items.includes(value))
  )
}

// Check if array has any value
export function hasAnyValue(
  items: any[],
  values: any[],
  transformFn?: TransformFn
): boolean {
  const hasItems = hasLength(items)
  const _items = hasItems && transformFn ? items.map(transformFn) : items
  return (
    hasItems &&
    hasLength(values) &&
    values.some((value) => _items.includes(value))
  )
}

// Check if object has key
export function hasKey(obj: any, key: StringOrNumber): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

// Check if object has keys
export function hasKeys(obj: any, keys: StringOrNumber[]): boolean {
  return hasLength(keys) && keys.every((key) => hasKey(obj, key))
}

// Check if object has any key
export function hasAnyKey(obj: any, keys: StringOrNumber[]): boolean {
  return hasLength(keys) && keys.some((key) => hasKey(obj, key))
}
