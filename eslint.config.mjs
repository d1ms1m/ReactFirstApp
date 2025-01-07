import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginI18next from "eslint-plugin-i18next";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        ignores: ["dist/**/*"],
    },
    pluginJs.configs.recommended,
    {
        plugins: {
            'i18next': pluginI18next,
        },
        rules: {
            'i18next/no-literal-string': [
                'error',
                {
                    markupOnly: true,
                    ignoreAttribute: ['data-testid'],
                },
            ],
        },
    },
    {
        ...pluginReact.configs.flat.recommended,
        settings: {
            react: {
                version: "detect",
            },
        },
        languageOptions: {
            ...pluginReact.configs.flat.recommended.languageOptions,
            sourceType: "module",
            globals: {
                ...globals.serviceworker,
                ...globals.browser,
            }
        }
    },
    pluginReact.configs.flat['jsx-runtime'],
    ...tseslint.configs.recommended,
    {
        rules: {
            "@typescript-eslint/no-unused-vars": "warn",
        },
    },
    {
        files: ["**/*.test.{ts,tsx}"],
        plugins: {
            'i18next': pluginI18next,
        },
        rules: {
            'i18next/no-literal-string': 'off',
        },
    }
];