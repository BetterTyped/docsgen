/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import type { ListrTaskWrapper } from "listr2";

import { name } from "../constants/name.constants";

export const logsLevels = ["trace", "info", "success", "warning", "error"] as const;

export type LogLevel = (typeof logsLevels)[number];

let logsLevel: LogLevel = "info";

let currentTask: ListrTaskWrapper<any, any, any> | null = null;

export const setLogLevel = (level: LogLevel) => {
  logsLevel = level;
};

export const setCurrentTask = (task: ListrTaskWrapper<any, any, any> | null) => {
  currentTask = task;
};

const shouldLog = (level: LogLevel): boolean => {
  return logsLevels.indexOf(logsLevel) <= logsLevels.indexOf(level);
};

const formatMessage = (value: any, project?: string): string => {
  const prefix = `[${name}]`;
  const projectTag = project ? ` [${project}]` : "";
  return `${prefix}${projectTag} ${value}`;
};

export const error = (value: any, project?: string) => {
  if (!shouldLog("error")) {return;}
  const msg = formatMessage(value, project);
  if (currentTask) {
    currentTask.output = `[ERROR] ${msg}`;
  } else {
    console.error(msg);
  }
};

export const warning = (value: any, project?: string) => {
  if (!shouldLog("warning")) {return;}
  const msg = formatMessage(value, project);
  if (currentTask) {
    currentTask.output = `[WARN] ${msg}`;
  } else {
    console.warn(msg);
  }
};

export const success = (value: any, project?: string) => {
  if (!shouldLog("success")) {return;}
  const msg = formatMessage(value, project);
  if (currentTask) {
    currentTask.output = msg;
  } else {
    console.log(msg);
  }
};

export const info = (value: any, project?: string) => {
  if (!shouldLog("info")) {return;}
  const msg = formatMessage(value, project);
  if (currentTask) {
    currentTask.output = msg;
  } else {
    console.log(msg);
  }
};

export const trace = (value: any, project?: string) => {
  if (!shouldLog("trace")) {return;}
  const msg = formatMessage(value, project);
  if (currentTask) {
    currentTask.output = msg;
  } else {
    console.log(msg);
  }
};
