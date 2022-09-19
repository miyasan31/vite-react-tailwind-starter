module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: { project: "./tsconfig.json" },
  settings: { tailwindcss: { groupByResponsive: true } },
  plugins: [
    "import",
    "import-access",
    "promise",
    "react",
    "sort-destructure-keys",
    "simple-import-sort",
    "tailwindcss",
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  rules: {
    "no-console": ["error", { allow: ["warn", "info", "error"] }],
    "no-undef": "error",
    "linebreak-style": ["error", "unix"],
    "prefer-arrow-callback": "error",
    "func-style": ["error", "expression"],
    "no-unused-vars": ["error", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }],

    // simple-import-sort
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    // import
    "import/newline-after-import": "error",
    "import/no-default-export": "error",

    // import-access (https://zenn.dev/uhyo/articles/eslint-plugin-import-access)
    "import-access/jsdoc": ["error"],

    // typescript-eslint
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: ["typeLike"],
        format: ["PascalCase"],
      },
      {
        selector: ["function", "method"],
        format: ["camelCase"],
      },
      {
        selector: ["variable", "parameter"],
        types: ["boolean", "string", "number", "array"],
        format: ["camelCase"],
      },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["is", "should", "has", "no"],
        filter: { regex: "^_", match: false },
      },
    ],

    // jsx-a11y
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/anchor-is-valid": ["error", { components: ["Link"], specialLink: ["to"] }],

    // react
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react/destructuring-assignment": ["error", "always"],
    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "on",
        eventHandlerPropPrefix: "on",
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],

    // next.js
    "@next/next/no-img-element": "off",
    "@next/next/no-html-link-for-pages": "off",
  },

  overrides: [
    {
      files: ["*.d.ts"],
      rules: {
        "no-unused-vars": "off",
      },
    },
    {
      files: ["tests/**.{ts,tsx}"],
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
    {
      files: ["vite.config.ts", "playwright.config.ts", "src/components/page/**/**.{ts,tsx}"],
      rules: {
        "import/no-default-export": "off",
      },
    },
    {
      files: ["**/{interfaces,interface*}/**.{ts,tsx}"],
      rules: {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "interface",
            format: ["PascalCase"],
            custom: {
              regex: "^I[A-Z]",
              match: true,
            },
          },
        ],
      },
    },
    {
      files: ["**/**.test.{ts,tsx}"],
      rules: { "no-undef": "off" },
    },
  ],
};
