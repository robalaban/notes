module.exports = {
    purge: {
        mode: "all",
        content: ["./_site/**/*.html"],
    },
    darkMode: "class",
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [require("@tailwindcss/typography")],
};
