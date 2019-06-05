module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  env: {
    "browser": true,
    "jest": true
},
  extends: [
    "react-app",
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  plugins: [
    "prettier",
    "react",
  ],
  rules: {

    "prefer-promise-reject-errors": ["off"],

    "react/jsx-filename-extension": ["off"],

    "react/prop-types": ["warn"],

    "no-return-assign": ["off"]
  }
};
