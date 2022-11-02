export type SafeAny<T = object> =
  | {
      [k in keyof T]?: SafeAny<T[k]>;
    }
  | boolean
  | number
  | string
  | symbol
  | null
  | undefined;
