import { ObjectToUnion } from "../lib";

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
