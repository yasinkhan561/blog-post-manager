module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:import/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.ts"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-refresh",
    "@typescript-eslint",
    "prettier",
    "no-relative-import-paths",
  ],
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".js", ".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
      alias: {
        map: [["~", "./src"]],
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
      // tells eslint how to resolve imports
      node: {
        paths: ["~"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["draftState"] },
    ],
    "react/function-component-definition": [
      "warn",
      {
        namedComponents: [
          "function-declaration",
          "function-expression",
          "arrow-function",
        ],
        unnamedComponents: ["function-expression", "arrow-function"],
      },
    ],
    "react/require-default-props": "off",
    quotes: ["error", "double", { avoidEscape: true }],
    "react/jsx-one-expression-per-line": "warn",
    "no-relative-import-paths/no-relative-import-paths": [
      "warn",
      { rootDir: "./src", prefix: "~" },
    ],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "index",
          "object",
          "type",
        ],
        warnOnUnassignedImports: true,
      },
    ],
  },
};
