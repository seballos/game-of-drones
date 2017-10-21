module.exports = {
    "extends": "airbnb-base",

    "parser": "babel-eslint",

    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "env": {
      "browser": true,
    },

    "rules": {
      "semi": ["error", "never"],
      "arrow-parens": ["error", "as-needed"],
      "jsx-a11y/href-no-hash": "off",
      "react/sort-comp": ["error", {
          order: [
            "lifecycle",
            "rendering",
            "everything-else",
            "static-methods",
          ],
          groups: {
            rendering: [
              "render",
              "/^render.+$/",
            ],
          },
        }],
    }
}
