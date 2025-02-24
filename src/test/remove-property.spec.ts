import { RemoveProperty } from "../lib";

const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
type Example1 = RemoveProperty<typeof object, 'firstName'>; // { readonly lastName: "Someone surname"; readonly age: 227; }
