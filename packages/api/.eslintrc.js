module.exports = {
  env: {
    node: true,
  },
  extends: [
    "../../.eslintrc.js",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  settings: {
    "import/extensions": [".js", ".ts"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
    "import/resolver": {
      typescript: {
        project: ["tsconfig.json"],
      },
    },
  },
  rules: {
    "no-restricted-imports": ["off"],
    "@typescript-eslint/no-restricted-imports": [
      "error",
      { patterns: ["../*"] },
    ],
    "import/order": ["error"],
    "import/no-default-export": ["error"],
    "import/first": ["error"],
    "import/newline-after-import": ["error"],
    "import/exports-last": ["error"],
  },
};
