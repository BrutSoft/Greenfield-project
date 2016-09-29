module.exports = {
  "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
    },
    "extends": "airbnb",
    "rules": {
      //  "indent": [1, "tab"],
       "no-console": 0,
   },
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
    ]
};
