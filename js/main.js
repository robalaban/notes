let root = document.documentElement;

const userPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

if (userPrefersDark || localStorage.getItem("themeColor") === "dark") {
    root.style.setProperty("--main-bg-color", "#1f2937");
    root.style.setProperty("--main-text-color", "rgba(209, 213, 219, 1)");
    root.style.setProperty("--main-accent-color", "rgba(31, 41, 55, 1)");
} else {
    root.style.setProperty("--main-bg-color", "#f9fafb");
    root.style.setProperty("--main-text-color", "rgba(55, 65, 81, 1)");
    root.style.setProperty("--main-accent-color", "rgba(219, 39, 119, 1)");
}

function theme() {
    const isDarkTheme =
        localStorage.getItem("themeColor") === "dark" ||
        localStorage.getItem("userThemePreference" === "dark");

    return {
        themeClass: isDarkTheme ? "dark" : "",
        toggle() {
            let currentTheme = localStorage.getItem("themeColor");
            if (currentTheme === "dark") {
                localStorage.setItem("themeColor", "light");
                root.style.setProperty("--main-bg-color", "#f9fafb");
                this.themeClass = "";
            } else {
                localStorage.setItem("themeColor", "dark");
                root.style.setProperty("--main-bg-color", "#1f2937");
                this.themeClass = "dark";
            }
        },
    };
}
