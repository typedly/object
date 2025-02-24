// Type.
import { Add } from '@typedly/property';
import { Exact } from "./exact.type";
/**
 * @description Adds the property to the object returning the exact(merged) object.
 * @export
 * @template {object} Obj The object to add the property.
 * @template {PropertyKey} Name The property name to add to object.
 * @template Value The value of the property.
 */
export type AddProperty<
  Obj extends object,
  Name extends PropertyKey,
  Value
> = Exact<Add<Obj, Name, Value>>;
