module.exports = {
  "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "rules": {
       "no-console": 0,
       "no-unused-vars": ["error", { "vars": "local", "args": "after-used" }],
       "import/no-unresolved": [2, { ignore: ['\.jsx?$'] }]
   },
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
    ]
};
