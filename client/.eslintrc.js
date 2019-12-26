module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "parser": "babel-eslint",
  "extends": '@react-native-community',
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "comma-dangle": 0,
    "react/prop-types": 0,
    "no-use-before-define": 0,
    "radix": 0,
    "no-param-reassign": 0,
    "react/jsx-filename-extension": 0,
    "no-plusplus": 0,
    "react/require-default-props": 0,
    "react/forbid-prop-types": 0,
    "prefer-destructuring": 0,
    "react/jsx-no-bind": 0
  }
};
