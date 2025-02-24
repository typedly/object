import { GetPropertyValue } from "../lib";

const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
type Example1 =  GetPropertyValue<typeof object, 'age'>;
// 227
