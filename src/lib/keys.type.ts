// Type.
import { GetPropertyValue } from "./get-property-value.type";
/**
 * @description
 * @export
 * @template {object} Obj 
 * @template [Type=any] 
 * @example
 * const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
 * type Example1 = Keys<typeof object>; // "firstName" | "lastName" | "age"
 */
export type Keys<Obj extends object, Type = any> = {
  [Key in keyof Obj]: GetPropertyValue<Obj, Key> extends Type ? Key : never;
}[keyof Obj];
