import "@testing-library/jest-dom/vitest";
import { TextDecoder, TextEncoder } from "util";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;
globalThis.TextEncoder = TextEncoder;
globalThis.TextDecoder = TextDecoder as typeof globalThis.TextDecoder;
