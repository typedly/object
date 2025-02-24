/**
 * @description
 * @export
 * @template {object} Obj 
 * @template {keyof Obj} Name 
 * @example
 * const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
 * type Example1 = GetPropertyValue<typeof object, 'firstName'>;
 */
export type GetPropertyValue<
  Obj extends object,
  Name extends keyof Obj
> = Obj[Name];
