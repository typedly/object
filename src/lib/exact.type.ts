/**
 * @description The type returns the exact object of Obj.
 * @export
 * @template Obj The original object type constrained by the `object`.
 * @example
 * const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
 * type Example = Exact<typeof object>;  // const example: { readonly firstName: "Someone"; readonly lastName: "Someone surname"; readonly age: 227;}
 */
export type Exact<Obj extends object> = {[Key in keyof Obj]: Obj[Key] } extends infer Captured ? { [Key in keyof Captured]: Captured[Key] } : never;
