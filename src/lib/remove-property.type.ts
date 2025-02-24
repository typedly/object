// Type.
import { Exact } from "./exact.type";
/**
 * @description Removes a property from an object type and ensures the final type is fully resolved.
 * @export
 * @template {object} Obj The original object type.
 * @template {keyof Obj} Name The property key name to remove.
 * @example
 * const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
 * type Example1 = RemoveProperty<typeof object, 'firstName'>; // { readonly lastName: "Someone surname"; readonly age: 227; }
 */
export type RemoveProperty<
  Obj extends object,
  Name extends keyof Obj
> = Exact<Omit<Obj, Name>>;
