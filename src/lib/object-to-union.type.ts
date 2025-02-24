/**
 * @description 
 * @export
 * @template {object} Obj 
 */
export type ObjectToUnion<Obj extends object> = {
  [Key in keyof Obj]: { key: Key; value: Obj[Key] }
}[keyof Obj] extends infer Union ? Exclude<Union, undefined> : never;
