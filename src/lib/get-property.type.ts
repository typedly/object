/**
 * @description Gets the property.
 * @export
 * @template {object} Obj 
 * @template {keyof Obj} Name 
 * @example
 * const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
 * type Example1 = GetProperty<typeof object, 'firstName'>;
 */
export type GetProperty<
  Obj extends object,
  Name extends keyof Obj
> = {[Key in Name]: Obj[Name]};
