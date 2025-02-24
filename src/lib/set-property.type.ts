// Type.
import { Exact } from "./exact.type";
import { Set } from "@typedly/property";
/**
 * @description
 * @export
 * @template {object} Obj 
 * @template {PropertyKey} Name 
 * @template Value 
 */
export type SetProperty<
  Obj extends object,
  Name extends PropertyKey,
  Value
> = Exact<Set<Obj, Name, Value>>;
