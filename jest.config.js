/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "jest-puppeteer",
  transform: {
    "^.+\\.tsx?$": ["ts-jest"],
  },
  testTimeout: 80000,
  snapshotSerializers: ["jest-serializer-html"],
  watchman: false,
};
