module.exports = {
    purge: {
        mode: "all",
        content: ["./_site/**/*.html"],
    },
    darkMode: "class",
    theme: {
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme("colors.grey.800"),
                        a: {
                            color: theme("colors.pink.500"),
                            "text-decoration": "none",
                            "&:hover, &.active": {
                                color: "white",
                                "background-color": theme("colors.pink.500"),
                                strong: {
                                    color: "white",
                                },
                            },
                        },
                        strong: {
                            color: theme("colors.pink.500"),
                        },
                        h1: {
                            color: theme("colors.grey.800"),
                            "margin-top": "0",
                        },
                        h2: {
                            color: theme("colors.grey.800"),
                            "margin-top": "0",
                        },
                        h3: {
                            color: theme("colors.grey.800"),
                            "margin-top": "0",
                        },
                        h4: {
                            color: theme("colors.grey.800"),
                            "margin-top": "0",
                        },
                        code: {
                            color: theme("colors.gray.300"),
                            "background-color": theme("colors.gray.900"),
                            "border-radius": "0.375rem",
                            "&:before, &:after": {
                                display: "none",
                            },
                        },
                        p: {
                            color: theme("colors.grey.800"),
                            "margin-top": "0",
                            "margin-bottom": "1em",
                        },
                        img: {
                            "margin-top": "0",
                            "margin-bottom": "0",
                            "box-shadow": "0px 2px 4px -2px rgba(0, 0, 0, 30%)",
                        },
                        "ul > li": {
                            "&::before": {
                                "background-color": theme("colors.grey.800"),
                                "font-weight": "bold",
                            },
                        },
                        "ol > li": {
                            "&::before": {
                                color: theme("colors.grey.800"),
                                "font-weight": "bold",
                            },
                        },
                    },
                },

                dark: {
                    css: {
                        color: "white",
                        a: {
                            color: theme("colors.pink.500"),
                            "text-decoration": "none",
                            "&:hover, &.active": {
                                color: "white",
                                "background-color": theme("colors.pink.700"),
                            },
                        },
                        strong: {
                            color: theme("colors.pink.500"),
                        },
                        h1: {
                            color: "white",
                            "margin-top": "0",
                        },
                        h2: {
                            color: "white",
                            "margin-top": "0",
                        },
                        h3: {
                            color: "white",
                            "margin-top": "0",
                            a: {
                                "&:hover, &.active": {
                                    "text-decoration": "none",
                                    color: theme("colors.pink.500"),
                                },
                            },
                        },
                        h4: {
                            color: "white",
                            "margin-top": "0",
                        },
                        pre: {
                            "background-color": theme("colors.gray.900"),
                            code: {
                                color: theme("colors.grey.300"),
                                "background-color": theme("colors.gray.900"),
                            },
                        },
                        code: {
                            color: theme("colors.grey.300"),
                            "background-color": theme("colors.gray.900"),
                            "border-radius": "0.375rem",
                            "&:before, &:after": {
                                display: "none",
                            },
                        },
                        p: {
                            color: "white",
                            "margin-top": "0",
                            "margin-bottom": "1em",
                        },
                        img: {
                            "margin-top": "0",
                            "margin-bottom": "0",
                            "box-shadow":
                                "0px 2px 4px -2px rgba(255, 255, 255, 30%)",
                        },
                        "ul > li": {
                            "&::before": {
                                "background-color": "white",
                                "font-weight": "bold",
                            },
                        },
                        "ol > li": {
                            "&::before": {
                                color: "white",
                                "font-weight": "bold",
                            },
                        },
                    },
                },
            }),
        },
    },
    plugins: [require("@tailwindcss/typography")],
    variants: {
        extend: {
            typography: ["dark"],
        },
    },
};
