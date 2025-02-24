import { UpdateProperty } from "../lib";

const object = { firstName: 'Someone' as string, lastName: 'Someone surname', age: 227 } as const;
type Example1 = UpdateProperty<typeof object, 'firstName', 'The name'>;
/*
  {
    readonly firstName: "The name";
    readonly lastName: "Someone surname";
    readonly age: 227;
  }
*/
