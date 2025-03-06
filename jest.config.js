module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["new/**/*"],
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
  transform: {
    "^.+\.ts$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "js", "json", "node"],
};
