/* eslint-env node */
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const port = process.env.PORT ?? 4444;
module.exports = {
  launch: {
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    headless: "new",
  },
  browserContext: "incognito",
};
