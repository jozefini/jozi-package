import { Path, PathValue } from "./types";

export function get<
  T,
  P extends Path<T>,
  D = undefined,
  ActualP extends string = P
>(
  obj: T,
  path: ActualP,
  defaultValue: D | undefined = undefined
): Exclude<PathValue<T, P & ActualP, D>, undefined> | D {
  const keys = (path as unknown as P).split(".") as string[];
  let result: any = obj;

  for (const key of keys) {
    if (result[key] === undefined) {
      return defaultValue as
        | Exclude<PathValue<T, P & ActualP, D>, undefined>
        | D;
    }
    result = result[key];
  }

  return result as Exclude<PathValue<T, P & ActualP, D>, undefined> | D;
}
