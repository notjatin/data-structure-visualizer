* Removed pre-written code from the following files `/README.md`, `/index.html`, `/src/main.tsx`, `/src/App.tsx`, `/src/App.css`, `/src/index.css`.
* Deleted the following
    1. `/src/assets/*.svg`
    2. `/public/*.svg`
* Ran the following commands:
    1. `npm i`
    2. `npm install -D tailwindcss postcss autoprefixer`
    3. `npx tailwindcss init -p`
    4. `npm install @tailwindcss/forms @tailwindcss/typography`
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