import { Keys } from "../lib";

const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
type Example1 = Keys<typeof object>; // "firstName" | "lastName" | "age"
