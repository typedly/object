import { GetProperty } from "../lib";

const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
type Example1 = GetProperty<typeof object, 'firstName'>;
// type Example1 = { readonly firstName: "Someone"; }
