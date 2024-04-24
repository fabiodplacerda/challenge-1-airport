export const assertEquals = (actual, expected) => actual === expected;
export const assertNotEquals = (actual, expected) => actual !== expected;
export const toEqual = (actual, expected) =>
  actual.toString() === expected.toString();
