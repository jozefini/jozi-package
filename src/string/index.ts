import { ReplacerKeys } from '../types'

export function strReplacer<S extends string>(
  value: S,
  mappedReplacer: ReplacerKeys<S>
): string {
  const prefix = '{{'
  const suffix = '}}'

  const shortcodes = Object.keys(mappedReplacer)
  if (shortcodes.length && value.includes(prefix) && value.includes(suffix)) {
    const pattern = new RegExp(
      `${prefix}(${shortcodes.join('|')})${suffix}`,
      'g'
    )

    return value.replace(pattern, (_, key: keyof typeof mappedReplacer) =>
      String(mappedReplacer[key] || '')
    )
  }
  return value
}
