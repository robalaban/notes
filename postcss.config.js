module.exports = {
    plugins: [
        require("postcss-easy-import"),
        require("postcss-preset-env")({ stage: 3 }),
    ],
};
