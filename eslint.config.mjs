import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        ignores: ["dist/**/*"],
        plugins: {
            pluginReact,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
    {
        languageOptions: {
            ...pluginReact.configs.flat.recommended.languageOptions,
            sourceType: "module",
            globals: {
                ...globals.serviceworker,
                ...globals.browser,
            }
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    pluginReact.configs.flat['jsx-runtime'],
    {
        rules: {
            //rules here
        }
    }
];