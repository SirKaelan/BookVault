import { defineConfig, globalIgnores } from "eslint/config";

import js from "@eslint/js";
import tseslint from "typescript-eslint";

import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVerison: 2020,
      globals: globals.browser,
    },
  },
]);
