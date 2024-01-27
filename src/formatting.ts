import { REPLACER } from "./constants";
import { ReplacerKeys } from "./types";

export function strReplacer<S extends string>(
  value: S,
  mappedReplacer: ReplacerKeys<S>
): string {
  const shortcodes = Object.keys(mappedReplacer);
  if (
    shortcodes.length &&
    value.includes(REPLACER.prefix) &&
    value.includes(REPLACER.suffix)
  ) {
    const pattern = new RegExp(
      `${REPLACER.prefix}(${shortcodes.join("|")})${REPLACER.suffix}`,
      "g"
    );

    return value.replace(pattern, (_, key: keyof typeof mappedReplacer) =>
      String(mappedReplacer[key] || "")
    );
  }
  return value;
}
