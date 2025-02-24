
import {
  AddProperty as _AddProperty
} from '.';

declare global {
  export namespace Typedly {
    export namespace Object {
      export namespace Property {
        export type Add<Obj extends object, Name extends PropertyKey, Value> = _AddProperty<Obj, Name, Value>;
      }
      export type AddProperty<Obj extends object, Name extends PropertyKey, Value> = _AddProperty<Obj, Name, Value>;
    }
  }
}

// const a: Typedly.Object.
