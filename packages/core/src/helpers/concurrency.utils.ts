import { writeFileSync } from "fs";
import { ensureDirSync, existsSync } from "fs-extra";

import { trace } from "./log.utils";

export const createInstance = (dir: string, fileName: string) => {
  trace("Creating instance...");
  ensureDirSync(dir);
  const date = new Date().toISOString();
  writeFileSync(fileName, JSON.stringify({ date }));
  return date;
};

export const isNewInstance = (file: string, date: string) => {
  const exist = existsSync(file);

  if (!exist) {
    return true;
  }

  // Require will cache the file, so watch mode will be initialized only once
  // eslint-disable-next-line import/no-dynamic-require, global-require, @typescript-eslint/no-var-requires
  const savedDate = require(file);

  if (savedDate?.date.slice(0, -8) !== date.slice(0, -8)) {
    trace("New instance detected.");
    return true;
  }
  return false;
};
