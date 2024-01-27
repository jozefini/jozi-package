// Object

export type Path<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? `${K & string}.${Path<T[K]>}` | `${K & string}`
        : never;
    }[keyof T]
  : "";

export type PathExists<
  T,
  P extends string
> = P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? Rest extends Path<T[K]>
      ? true
      : false
    : false
  : P extends keyof T
  ? true
  : false;

export type PathValue<
  T,
  P extends Path<T>,
  D = undefined
> = P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? Rest extends Path<T[K]>
      ? PathValue<T[K], Rest, D>
      : D
    : D
  : P extends keyof T
  ? T[P]
  : D;

// Formatting

export type ExtractKeys<S extends string> =
  S extends `${string}{{${infer K}}}${infer Rest}`
    ? K | ExtractKeys<Rest>
    : never;

export type ReplacerKeys<S extends string> = ExtractKeys<S> extends infer K
  ? K extends string
    ? Record<K, string | number> & Record<string, string | number>
    : never
  : never;
