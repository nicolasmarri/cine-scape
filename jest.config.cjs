module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  testMatch: ["**/?(*.)+(spec|test).+(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  setupFilesAfterEnv: ["./jest.setup.cjs"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
