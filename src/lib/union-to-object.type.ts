// Type.
import { KeyValueSchema } from "./key-value-schema.type";
/**
 * @description
 * @export
 * @template {{ key: PropertyKey; value: any }} Union 
 */
export type UnionToObject<Union extends KeyValueSchema> = {
  [Object in Union as Object['key']]: Object['value']
}
