/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import chalk from "chalk";

import { name } from "../constants/name.constants";

export const logsLevels = ["trace", "info", "success", "warning", "error"] as const;

let logsLevel: (typeof logsLevels)[number] = "info";

export const setLogLevel = (level: (typeof logsLevels)[number]) => {
  logsLevel = level;
};

export const error = (value: any, project?: string) => {
  if (logsLevels.indexOf(logsLevel) > logsLevels.indexOf("error")) return;
  console.log(
    "\n",
    chalk.bold.yellow(`[${name}]`),
    project ? chalk.bold.white(`[${project}]`) : "",
    chalk.bold.red(value),
  );
};
export const warning = (value: any, project?: string) => {
  if (logsLevels.indexOf(logsLevel) > logsLevels.indexOf("warning")) return;
  console.log(
    "\n",
    chalk.bold.yellow(`[${name}]`),
    project ? chalk.bold.white(`[${project}]`) : "",
    chalk.bold.hex("#FFA500")(value),
  );
};
export const success = (value: any, project?: string) => {
  if (logsLevels.indexOf(logsLevel) > logsLevels.indexOf("success")) return;
  console.log(
    "\n",
    chalk.bold.yellow(`[${name}]`),
    project ? chalk.bold.white(`[${project}]`) : "",
    chalk.bold.green(value),
  );
};
export const info = (value: any, project?: string) => {
  if (logsLevels.indexOf(logsLevel) > logsLevels.indexOf("info")) return;
  console.log(
    "\n",
    chalk.bold.yellow(`[${name}]`),
    project ? chalk.bold.white(`[${project}]`) : "",
    chalk.bold.blue(value),
  );
};
export const trace = (value: any, project?: string) => {
  if (logsLevels.indexOf(logsLevel) > logsLevels.indexOf("trace")) return;
  console.log(
    "\n",
    chalk.bold.yellow(`[${name}]`),
    project ? chalk.bold.white(`[${project}]`) : "",
    chalk.white(value),
  );
};
