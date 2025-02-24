import { SetProperty } from "../lib";
import { Set } from '@typedly/property';

const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 as number } as const;

type Example1 =  Set<{ firstName: 'Someone', lastName: 'Someone surname', age: 227 }, 'age', 227>;
type Example2 =  SetProperty<typeof object, 'age', 222>;
// { readonly firstName: "Someone"; readonly lastName: "Someone surname"; readonly age: 227; city: "London"; }
