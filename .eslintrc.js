/*
 *
 * next/core-web-vitalsを使用しており、Next.jsが推奨しているコーディングルールに肖る
 *
 */

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
    /*
     * =========================================
     * formatter
     * =========================================
     */
    // コンソールの種類を指定する
    "no-console": ["error", { allow: ["warn", "info", "error"] }],
    // 未定義の変数の参照を禁止する
    "no-undef": "error",
    // 改行のコードを指定する
    "linebreak-style": ["error", "unix"],

    /*
     * =========================================
     * import export
     * =========================================
     */
    // require()を使用する
    "@typescript-eslint/no-var-requires": "off",
    // importの記述順を指定する
    "simple-import-sort/imports": "error",
    // exportの記述順を指定する
    "simple-import-sort/exports": "error",
    // importの最後に1行空行を挿入する
    "import/newline-after-import": "error",
    // type only import を使用する
    "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
    // default export を使用しない
    "import/no-default-export": "error",
    // https://zenn.dev/uhyo/articles/eslint-plugin-import-access
    // "import-access/jsdoc": ["error"],

    /*
     * =========================================
     * 型定義
     * =========================================
     */
    // any型を使用しない
    "@typescript-eslint/no-explicit-any": "error",

    /*
     * =========================================
     * 関数宣言
     * =========================================
     */
    // コールバック関数内は必ずアロー関数を定義
    "prefer-arrow-callback": "error",
    // 関数宣言は必ずアロー関数定義
    "func-style": ["error", "expression"],

    /*
     * =========================================
     * 命名規則
     * =========================================
     */
    // 未使用の変数の接頭辞に _ を付けるとエラーにならない
    "no-unused-vars": ["error", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }],
    "@typescript-eslint/naming-convention": [
      "error",
      // typeLike (class, interface, typeAlias, enum, typeParameter) は PascalCase
      {
        selector: ["typeLike"],
        format: ["PascalCase"],
      },
      /* TODO:なぜか効かない */
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

    /*
     * =========================================
     * jsx-a11y
     * =========================================
     */
    // autoFocusの使用する
    "jsx-a11y/no-autofocus": "off",
    // Linkコンポーネント使用時にtoプロパティを指定する
    "jsx-a11y/anchor-is-valid": ["error", { components: ["Link"], specialLink: ["to"] }],

    /*
     * =========================================
     * React
     * =========================================
     */
    // 全てのコンポーネントに名前を付ける
    "react/display-name": "off",
    // import React from "react"を省略する
    "react/react-in-jsx-scope": "off",
    // hooks内部でhooks使用時に依存配列の記述を催促する
    "react-hooks/exhaustive-deps": "warn",
    // propsの分割代入を使用する
    "react/destructuring-assignment": ["error", "always"],
    // イベントハンドラー用関数は接頭辞にhandleを含める
    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],

    /*
     * =========================================
     * Next.js
     * =========================================
     */
    // next/image 推奨warning
    "@next/next/no-img-element": "off",

    /*
     * =========================================
     * next/core-web-vitalsによって不要になったもの
     * =========================================
     */
    // 関数内の変数で再代入されない場合はconstで定義する
    // "prefer-const": "error",
  },
  overrides: [
    {
      // default exportを一部のファイルで許可する
      files: ["src/App.{ts,tsx}", "src/pages/**.{ts,tsx}", "vite.config.ts"],
      rules: {
        "import/no-default-export": "off",
      },
    },
    {
      // interfacesフォルダ内でのinterface定義は接頭辞にIを付ける
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
  ],
};
