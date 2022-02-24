require("../css/main.css");

import "alpinejs";

const root = document.documentElement;
const htmlClasses = document.querySelector("html").classList;

const userPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

if (userPrefersDark && !localStorage.getItem("themeColor")) {
    localStorage.setItem("themeColor", "dark");
}

function darkTheme() {
    root.style.setProperty("--main-bg-color", "#1f2937");
    root.style.setProperty("--main-text-color", "rgba(209, 213, 219, 1)");
    root.style.setProperty("--main-bg-color-accent", "rgba(17, 24, 39, 1)");
    root.style.setProperty("--main-accent-color", "rgba(31, 41, 55, 1)");
    root.style.setProperty("--main-accent-color-darker", "rgba(17, 24, 39, 1)");
    root.style.setProperty("--intro-to", "rgba(55, 65, 81, 1)");
    root.style.setProperty("--intro-to-opacity", "rgba(55, 65, 81, 0)");
    root.style.setProperty("--intro-from", "rgba(31, 41, 55, 1)");
}

function lightTheme() {
    root.style.setProperty("--main-bg-color", "#f9fafb");
    root.style.setProperty("--main-text-color", "rgba(55, 65, 81, 1)");
    root.style.setProperty("--main-bg-color-accent", "rgba(243, 244, 246, 1)");
    root.style.setProperty(
        "--main-accent-color-darker",
        "rgba(190, 24, 93, 1)"
    );
    root.style.setProperty("--main-accent-color", "rgba(219, 39, 119, 1)");
    root.style.setProperty("--intro-to", "rgba(236, 72, 153, 1)");
    root.style.setProperty("--intro-to-opacity", "rgba(236, 72, 153, 0)");
    root.style.setProperty("--intro-from", "rgba(219, 39, 119, 1)");
}

if (localStorage.getItem("themeColor") === "dark") {
    htmlClasses.add("dark");
    darkTheme();
} else {
    lightTheme();
}

window.theme = function () {
    return {
        toggle() {
            const isDarkTheme = localStorage.getItem("themeColor") === "dark";
            if (isDarkTheme) {
                htmlClasses.remove("dark");
                localStorage.setItem("themeColor", "light");
                lightTheme();
            } else {
                darkTheme();
                htmlClasses.add("dark");
                localStorage.setItem("themeColor", "dark");
            }
        },
    };
};
