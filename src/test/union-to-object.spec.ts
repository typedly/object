import { ObjectToUnion, UnionToObject } from "../lib";

type User = {
  id: number;
  name: string;
  active: boolean;
};

type UserUnion = ObjectToUnion<User>;
type UserUnionObject = UnionToObject<UserUnion>;

/*
Equivalent to:
type UserUnionObject = {
  id: number;
  name: string;
  active: boolean;
}
*/


type Config = {
  theme: "light" | "dark";
  version: number;
  debug: { enabled: boolean; level: number };
};

type ConfigUnion = ObjectToUnion<Config>;
type ConfigUnionObject = UnionToObject<ConfigUnion>;

/*
type ConfigUnionObject = {
  theme: "light" | "dark";
  version: number;
  debug: {
    enabled: boolean;
    level: number;
  };
}
*/


type Settings = {
  readonly mode: "auto" | "manual";
  volume?: number;
};

type SettingsUnion = ObjectToUnion<Settings>;
type SettingsUnionObject = UnionToObject<SettingsUnion>;

/*
type SettingsUnion =
  | { key: "mode"; value: "auto" | "manual" }
  | { key: "volume"; value: number | undefined };
*/
