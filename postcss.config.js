module.exports = {
    plugins: [
        require("postcss-easy-import"),
        require("tailwindcss"),
        require("autoprefixer"),
        require("postcss-preset-env")({ stage: 3 }),
    ],
};
