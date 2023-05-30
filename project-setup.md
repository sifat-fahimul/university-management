# basic project setup for node express server TS.

## 1st step: create a new project with node.

```
npm init -y
OR
npm init
```

---

## 2nd step: installation TypeScript and configure.

```
yarn add -D typescript
OR
npm install typescript --save-dev
```

```
tsc --init
```

go to tsconfig.json and configure your file location e.g. ["rootDir": "./src"] && [ "outDir": "./dist" ]

basic ts configuration done!🤗

now need a TS compiler for your project and run it.
install the TS compiler package name ts-node-dev

```
yarn add ts-node-dev --dev
OR
npm install ts-node-dev --save-dev
```

### added the following code in the package.json file in scripts:

.

for run and start the project added this script

```
"start": "ts-node-dev --respawn --transpile-only src/server.ts",
```

after added this script run the project with

```
yarn start
OR
npm start
```

---

## 3rd step: install express mongoose cors and dotenv packages.

- express

```
yarn add express
OR
npm install express
```

- mongoose

```
yarn add mongoose
OR
npm install mongoose
```

- cors

```
yarn add cors
OR
npm install cors
```

- dotenv

```
yarn add dotenv
OR
npm install dotenv
```

---

## 4th step: setup eslint and prettier

first install eslint

```
yarn add -D npm eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
OR
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

- Let’s create a configuration file using the CLI. Run the following command in the terminal:

```
npx eslint --init
```

or you can create a configuration file name .eslintrc (dot eslintrc)
added this code in the file

```
// .eslintrc
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module",
  },
  "plugins": ["@typescript-eslint"],
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],

  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    // to enforce using type for object type definitions, can be type or interface
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
  },

  "env": {
    "browser": true,
    "es2021": true
  }
}
```

now added script in package.json

```
// package.json
{
  // ...
  "scripts": {
    "lint": "eslint --ignore-path .eslintignore --ext .js,.ts ."
   },
  // ...
}
```

for fixing list error run and added the script to the package.json file.

```
// package.json
{
  // ...
  "scripts": {
    "lint": "eslint --ignore-path .eslintignore --ext .js,.ts .",
    "lint:fix": "lint . --fix",
   },
  // ...
}
```

## don not forget to create a .eslintignore file

and added this code for ignored files which are not included to check linting.

```
dist
node_modules
.env

```

---

- install prettier

```
yarn add -D prettier
OR
npm install --save-dev prettier
```

now create a configuration file name .prettierrc (dot prettierrc)
added this code in the file

```
// .prettierrc
  {
    "semi": false,
    "singleQuote": true,
    "arrowParens": "avoid"
  }
```

now added script in package.json

```
// package.json
{
  // ...
  "scripts": {
       "prettier:check": "prettier --ignore-path .gitignore --write \"**/*.+(js|ts|json)\"",
   },
  // ...
}
```

for fixing list error run and added the script to the package.json file.

```
// package.json
{
  // ...
  "scripts": {
    "prettier:check": "prettier --ignore-path .gitignore --write \"**/*.+(js|ts|json)\"",
    "prettier:fix": "prettier --write .",
   },
  // ...
}
```
