import { AddProperty } from "../lib";
import { Add } from '@typedly/property';

const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;

type Example1 =  Add<typeof object, 'city', 'London'>;
// type Example1 = { readonly firstName: "Someone"; readonly lastName: "Someone surname"; readonly age: 227; } & { city: "London"; }

type Example2 =  AddProperty<typeof object, 'city', 'London'>;
// { readonly firstName: "Someone"; readonly lastName: "Someone surname"; readonly age: 227; city: "London"; }
