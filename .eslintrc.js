module.exports = {
  root: true,
  extends: "@react-native",
  ignores: [".config/*"],

  rules: {
    "quotes": ["error", "double"],
    "no-unused-vars": 0,
    "react-hooks/exhaustive-deps": 0,
  },
};
