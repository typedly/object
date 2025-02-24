// Type.
import { Update } from "@typedly/property";
/**
 * @description Updates the object property name with the value.
 * @export
 * @template {object} Obj The object to update.
 * @template {PropertyKey} Name The property name to update.
 * @template Value The value of the same type to update.
 */
export type UpdateProperty<
  Obj extends object,
  Name extends keyof Obj,
  Value extends Obj[Name]
> = Update<Obj, Name, Value>;
