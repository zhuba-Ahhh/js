module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['new'],
  testMatch: ['**/__tests__/**/*.[jt]s', '**/?(*.)+(spec|test).[jt]s'],
  transform: {
    '^.+.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};
