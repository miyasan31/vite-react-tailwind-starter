module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: [
    "@typescript-eslint",
    "simple-import-sort",
    "tailwindcss",
    // "react",
    // "import-access",
  ],
  settings: { tailwindcss: { groupByResponsive: true } },
  extends: ["plugin:react/recommended", "standard", "next/core-web-vitals", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": ["error", { allow: ["warn", "info", "error"] }],
    "no-undef": "error",
    "linebreak-style": ["error", "unix"],

    // import export
    "@typescript-eslint/no-var-requires": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/newline-after-import": "error",
    "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
    "import/no-default-export": "error",
    // https://zenn.dev/uhyo/articles/eslint-plugin-import-access
    // "import-access/jsdoc": ["error"],

    // naming
    "@typescript-eslint/no-explicit-any": "error",
    "prefer-arrow-callback": "error",
    "func-style": ["error", "expression"],
    "no-unused-vars": ["error", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: ["typeLike"],
        format: ["PascalCase"],
      },
      /* TODO:not working🤷‍♂️🤷‍♀️ */
      // function, method (classMethod, objectLiteralMethod, typeMethod) は camelCase
      // {
      //   selector: ["function", "method"],
      //   format: ["camelCase"],
      // },
      // function 以外の variable, parameter は camelCase
      // {
      //   selector: ["variable", "parameter"],
      //   types: ["boolean", "string", "number", "array"],
      //   format: ["camelCase"],
      // },
      // boolean の variable は特定の prefix をつけた状態で PascalCase
      // {
      //   selector: "variable",
      //   types: ["boolean"],
      //   format: ["PascalCase"],
      //   prefix: ["is", "should", "has", "can", "did", "will"],
      // },
    ],

    // jsx-a11y
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/anchor-is-valid": ["error", { components: ["Link"], specialLink: ["to"] }],

    // React
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react/destructuring-assignment": ["error", "always"],
    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],

    // Next.js
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
