# demo of vite packaging a lib + its types

**package**

- some function + type defined in `on-va-dire-que-c-le-package/src/index.ts`
- built by vite + vite-plugin-dts -> outputed in `dist/index.js` and `dist/index.d.ts`
- `dist/index.js` defined as "main" in `package.json`

**client**

- we import the package with `import ... from "../on-va-dire-que-c-le-package"` (in real world, that
would be translated to `import ... from "my-package"`)
- types & functions are importable

## How to test

1. Go to package folder

```
cd on-va-dire-que-c-le-package
```

2. Install & build

```
pnpm i
pnpm build
```

3. Go to the client

```
cd on-va-dire-que-c-le-client
```

4. Install & run

```
pnpm i
pnpm dev
```

5. Profit

It should display "age: 5" in the webpage
