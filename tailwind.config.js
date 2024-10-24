/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                Keppel: "#45B69C",
                "African-Violet": "#B38CB4",
                "Black-olive": "#41463D",
                Almond: "#E5D4C0",
                Ecru: "#D4B483",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
