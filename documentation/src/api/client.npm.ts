import { Client } from "@hyper-fetch/core";

export const npmClient = new Client({
  url: "https://api.npmjs.org/",
});

export const getDownloadsCount = npmClient.createRequest<{ downloads: number; package: string }>()({
  endpoint: "/downloads/point/last-month/:packageName",
});
