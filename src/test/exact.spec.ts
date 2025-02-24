import { Exact } from "../lib";

const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
type Example = Exact<typeof object>;  // const example: { readonly firstName: "Someone"; readonly lastName: "Someone surname"; readonly age: 227;}
