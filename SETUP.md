-   Removed pre-written code from the following files `/README.md`, `/index.html`, `/src/main.tsx`, `/src/App.tsx`, `/src/App.css`, `/src/index.css`.
-   Deleted the following
    1. `/src/assets/*.svg`
    2. `/public/*.svg`
-   Ran the following commands:
    1. `npm i`
    2. `npm install -D tailwindcss postcss autoprefixer`
    3. `npx tailwindcss init -p`
    4. `npm install @tailwindcss/forms @tailwindcss/typography`
<<<<<<< HEAD
-   Added 1. These lines to `/src/index.css`
    `css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ` 2. To `/tailwind.config.js`
    `js
    export default {
        content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
        theme: {
            extend: {},
        },
        plugins: [
            require("@tailwindcss/forms"),
            require("@tailwindcss/typography"),
        ],
    };
    `
-   clsx examples

```js
import clsx from "clsx";
// or
import { clsx } from "clsx";

// Strings (variadic)
clsx("foo", true && "bar", "baz");
//=> 'foo bar baz'

// Objects
clsx({ foo: true, bar: false, baz: isTrue() });
//=> 'foo baz'

// Objects (variadic)
clsx({ foo: true }, { bar: false }, null, { "--foobar": "hello" });
//=> 'foo --foobar'

// Arrays
clsx(["foo", 0, false, "bar"]);
//=> 'foo bar'

// Arrays (variadic)
clsx(["foo"], ["", 0, false, "bar"], [["baz", [["hello"], "there"]]]);
//=> 'foo bar baz hello there'

// Kitchen sink (with nesting)
clsx(
    "foo",
    [1 && "bar", { baz: false, bat: null }, ["hello", ["world"]]],
    "cya"
);
//=> 'foo bar hello world cya'
```
=======
* Added
    1. These lines to `/src/index.css`
        ```css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```
    2. To `/tailwind.config.js`
        ```js
        export default {
            content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
            theme: {
                extend: {},
            },
            plugins: [
                require("@tailwindcss/forms"),
                require("@tailwindcss/typography"),
            ],
        };
        ```
>>>>>>> parent of 2029882 (improve grammar)
