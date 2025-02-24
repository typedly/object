
<a href="https://github.com/typescript-package">
  <img
    src="https://avatars.githubusercontent.com/u/189665258?s=150&u=712e292bae048947d1f7d2020d7d38875c40e63a&v=4"
    title="@typedly/object"
    style="float:left; margin-right: 10px;"
  />
</a>

## typedly/object

<!-- npm badge -->
[![npm version][typedly-npm-badge-svg]][typedly-npm-badge]
[![GitHub issues][typedly-badge-issues]][typedly-issues]
[![GitHub license][typedly-badge-license]][typedly-license]

A **TypeScript** type definitions package to handle object-related operations.

## Table of contents

- [Installation](#installation)
- [Api](#api)
  - [`AddProperty`](#addproperty)
  - [`Exact`](#exact)
  - [`GetProperty`](#getproperty)
  - [`GetPropertyValue`](#getpropertyvalue)
  - [`KeyValueSchema`](#keyvalueschema)
  - [`Keys`](#keys)
  - [`ObjectToUnion`](#objecttounion)
  - [`PickKeys`](#pickkeys)
  - [`RemoveProperty`](#removeproperty)
  - [`SetProperty`](#setproperty)
  - [`UnionToObject`](#uniontoobject)
  - [`UpdateProperty`](#updateproperty)
- [Contributing](#contributing)
- [Support](#support)
- [Code of Conduct](#code-of-conduct)
- [Git](#git)
  - [Commit](#commit)
  - [Versioning](#versioning)
- [License](#license)

## Installation

Install peer dependencies.

```bash
npm install @typedly/property --save-peer
```

Install the package.

```bash
npm install @typedly/object --save-peer
```

## Api

```typescript
import {
  AddProperty,
  Exact,
  GetProperty,
  GetPropertyValue,
  KeyValueSchema,
  Keys,
  ObjectToUnion,
  PickKeys,
  RemoveProperty,
  SetProperty,
  UnionToObject,
  UpdateProperty,
} from '@typedly/object';
```

### `AddProperty`

Differences between `Add` and `AddProperty`.

```typescript
import { AddProperty } from '@typedly/object';
import { Add } from '@typedly/property';

const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;

type Example1 =  Add<typeof object, 'city', 'London'>;
// type Example1 = { readonly firstName: "Someone"; readonly lastName: "Someone surname"; readonly age: 227; } & { city: "London"; }

type Example2 =  AddProperty<typeof object, 'city', 'London'>;
// { readonly firstName: "Someone"; readonly lastName: "Someone surname"; readonly age: 227; city: "London"; }
```

### `Exact`

```typescript
import { Exact } from '@typedly/object';

const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
type Example = Exact<typeof object>;  // const example: { readonly firstName: "Someone"; readonly lastName: "Someone surname"; readonly age: 227;}
```

### `GetPropertyValue`

```typescript
import { GetPropertyValue } from '@typedly/object';

const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
type Example1 =  GetPropertyValue<typeof object, 'age'>;
// 227
```

### `GetProperty`

```typescript
import { GetProperty } from '@typedly/object';

const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
type Example1 = GetProperty<typeof object, 'firstName'>;
// type Example1 = { readonly firstName: "Someone"; }
```

### `KeyValueSchema`

```typescript
import { KeyValueSchema } from '@typedly/object';

```

### `Keys`

```typescript
import { Keys } from '@typedly/object';

const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
type Example1 = Keys<typeof object>; // "firstName" | "lastName" | "age"
```

### `ObjectToUnion`

```typescript
import { ObjectToUnion } from '@typedly/object';

type User = {
  id: number;
  name: string;
  active: boolean;
};

type UserUnion = ObjectToUnion<User>;

/*
Equivalent to:
type UserUnion =
  | { key: "id"; value: number }
  | { key: "name"; value: string }
  | { key: "active"; value: boolean };
*/


type Config = {
  theme: "light" | "dark";
  version: number;
  debug: { enabled: boolean; level: number };
};

type ConfigUnion = ObjectToUnion<Config>;

/*
type ConfigUnion =
  | { key: "theme"; value: "light" | "dark" }
  | { key: "version"; value: number }
  | { key: "debug"; value: { enabled: boolean; level: number } };
*/


type Settings = {
  readonly mode: "auto" | "manual";
  volume?: number;
};

type SettingsUnion = ObjectToUnion<Settings>;

/*
type SettingsUnion =
  | { key: "mode"; value: "auto" | "manual" }
  | { key: "volume"; value: number | undefined };
*/
```

### `PickKeys`

```typescript
import { PickKeys } from '@typedly/object';

type User = {
  id: number;
  name: string;
  active: boolean;
};

type UserSubset = PickKeys<User, "id" | "name">;

/*
Equivalent to:
type UserSubset = {
  id: number;
  name: string;
};
*/


type Config = {
  theme: "light" | "dark";
  version: number;
  debug: boolean;
};

type ConfigSubset = PickKeys<Config, "theme" | "unknown">;

/*
Equivalent to:
type ConfigSubset = {
  theme: "light" | "dark";
};
*/

type Settings = {
  mode: "auto" | "manual";
  volume: number;
};

type InvalidSubset = PickKeys<Settings, "brightness" | "contrast">;

/*
Equivalent to:
type InvalidSubset = {}; // Empty object since no matching keys exist
*/
```

### `RemoveProperty`

```typescript
import { RemoveProperty } from '@typedly/object';

const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
type Example1 = RemoveProperty<typeof object, 'firstName'>; // { readonly lastName: "Someone surname"; readonly age: 227; }
```

### `SetProperty`

```typescript
import { SetProperty } from '@typedly/object';

const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 as number } as const;

type Example1 =  Set<{ firstName: 'Someone', lastName: 'Someone surname', age: 227 }, 'age', 227>;
type Example2 =  SetProperty<typeof object, 'age', 222>;
// { readonly firstName: "Someone"; readonly lastName: "Someone surname"; readonly age: 227; city: "London"; }
```

### `UnionToObject`

```typescript
import { UnionToObject } from '@typedly/object';

type UserUnion =
  | { key: "id"; value: number }
  | { key: "name"; value: string }
  | { key: "active"; value: boolean };

type UserObject = UnionToObject<UserUnion>;

/*
Equivalent to:
type UserObject = {
  id: number;
  name: string;
  active: boolean;
};
*/


type ConfigUnion =
  | { key: "theme"; value: "light" | "dark" }
  | { key: "version"; value: number }
  | { key: "debug"; value: { enabled: boolean; level: number } };

type ConfigObject = UnionToObject<ConfigUnion>;

/*
Equivalent to:
type ConfigObject = {
  theme: "light" | "dark";
  version: number;
  debug: { enabled: boolean; level: number };
};
*/


type SettingsUnion =
  | { key: "mode"; value: "auto" | "manual" }
  | { key: "volume"; value?: number };

type SettingsObject = UnionToObject<SettingsUnion>;

/*
Equivalent to:
type SettingsObject = {
  mode: "auto" | "manual";
  volume?: number;
};
*/
```

### `UpdateProperty`

```typescript
import { UpdateProperty } from '@typedly/object';

const object = { firstName: 'Someone' as string, lastName: 'Someone surname', age: 227 } as const;
type Example1 = UpdateProperty<typeof object, 'firstName', 'The name'>;
/*
  {
    readonly firstName: "The name";
    readonly lastName: "Someone surname";
    readonly age: 227;
  }
*/
```

## Contributing

Your contributions are valued! If you'd like to contribute, please feel free to submit a pull request. Help is always appreciated.

## Support

If you find this package useful and would like to support its and general development, you can contribute through one of the following payment methods. Your support helps maintain the packages and continue adding new.

Support via:

- [Stripe](https://donate.stripe.com/dR614hfDZcJE3wAcMM)
- [Revolut](https://checkout.revolut.com/pay/048b10a3-0e10-42c8-a917-e3e9cb4c8e29)

Thanks for your support!

## Code of Conduct

By participating in this project, you agree to follow **[Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)**.

## GIT

### Commit

- [AngularJS Git Commit Message Conventions][git-commit-angular]
- [Karma Git Commit Msg][git-commit-karma]
- [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © typedly ([license][typedly-license])

## Packages

- **[@typedly/array](https://github.com/typedly/array)**: A **TypeScript** type definitions package to handle array-related operations.
- **[@typedly/callback](https://github.com/typedly/callback)**: A **TypeScript** type definitions package for asynchronous and synchronous callback functions of various types.
- **[@typedly/character](https://github.com/typedly/character)**: A **TypeScript** type definitions package for various character types.
- **[@typedly/context](https://github.com/typedly/context)**: A **TypeScript** type definitions package for context data structures.
- **[@typedly/descriptor](https://github.com/typedly/descriptor)**: A **TypeScript** type definitions package for property descriptor.
- **[@typedly/digit](https://github.com/typedly/digit)**: A **TypeScript** type definitions package for digit types.
- **[@typedly/letter](https://github.com/typedly/letter)**: A **TypeScript** type definitions package for handling letter types.
- **[@typedly/payload](https://github.com/typedly/payload)**: A **TypeScript** type definitions package for payload data structures.
- **[@typedly/property](https://github.com/typedly/property)**: A **TypeScript** type definitions package to handle object property-related operations.
- **[@typedly/regexp](https://github.com/typedly/regexp)**: A **TypeScript** type definitions package for `RegExp`.
- **[@typedly/symbol](https://github.com/typedly/symbol)**: A **TypeScript** type definitions package for various symbols.

<!-- This package: typedly  -->
  <!-- GitHub: badges -->
  [typedly-badge-issues]: https://img.shields.io/github/issues/typedly/object
  [typedly-badge-forks]: https://img.shields.io/github/forks/typedly/object
  [typedly-badge-stars]: https://img.shields.io/github/stars/typedly/object
  [typedly-badge-license]: https://img.shields.io/github/license/typedly/object
  <!-- GitHub: badges links -->
  [typedly-issues]: https://github.com/typedly/object/issues
  [typedly-forks]: https://github.com/typedly/object/network
  [typedly-license]: https://github.com/typedly/object/blob/master/LICENSE
  [typedly-stars]: https://github.com/typedly/object/stargazers
<!-- This package -->

<!-- Package: typedly -->
  <!-- npm -->
  [typedly-npm-badge-svg]: https://badge.fury.io/js/@typedly%2Fobject.svg
  [typedly-npm-badge]: https://badge.fury.io/js/@typedly%2Fobject

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/
