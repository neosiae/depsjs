module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "standard",
    "plugin:react/recommended"
  ],
  "plugins": [
    "react-hooks"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error"
  },
  "settings": {
    "react": {
      "version": "16.7.0"
    }
  }
}
