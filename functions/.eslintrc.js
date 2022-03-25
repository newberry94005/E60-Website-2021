module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "max-len": ["error", {"code": 1000}],
    "quotes": ["error", "double"],
  },
};
