# Longbeard's ESLint & Prettier configuration

This ESLint configuration is designed to work with Prettier.

## Installation

To get started, install this package with all its peer dependencies

If the project uses **npm**:

```shell
npm install -D @longbeard/eslint-config
npx install-peerdeps -D @longbeard/eslint-config
```

If the project uses **pnpm**:

```shell
pnpm install -D @longbeard/eslint-config
npx install-peerdeps -D --pnpm @longbeard/eslint-config
```

On your `.eslintrc.js` file, extend this config:

```js
module.exports = {
  extends: ['@longbeard'],
};
```

## Configuring Prettier

Create `.prettierrc` file with the following config:

```json
{
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "endOfLine": "auto"
}
```

Or refer to Longbeard's `dotfiles` repo for the most up-to-date config.

## Configuring VSCode

If your VSCode doesn't lint automatically, you might need to adjust its configuration.

1. Install the [https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint](ESLint Plugin)

2. Adjust VSCode Settings (JSON):

   ```json
   {
     // Enable auto-save
     "editor.formatOnSave": true,
     // Show eslint icon at bottom toolbar
     "eslint.alwaysShowStatus": true,
     // Tell the ESLint plugin to run on save
     "editor.codeActionsOnSave": {
       "source.fixAll": true
     },
     // Validate JS / TS files
     "eslint.validate": [
       "javascript",
       "javascriptreact",
       "typescript",
       "typescriptreact"
     ]
   }
   ```

3. Finally, you might need to restart VSCode.
