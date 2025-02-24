import { PickKeys } from "../lib";

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
