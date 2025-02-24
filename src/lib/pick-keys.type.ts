/**
 * @description
 * @export
 * @template {object} Obj 
 * @template {keyof any} Keys 
 */
// OnlyKeys
export type PickKeys<
  Obj extends object,
  Keys extends keyof any
> = Pick<Obj, Extract<keyof Obj, Keys>>;
