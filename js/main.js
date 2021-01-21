const userPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

if (userPrefersDark) {
    localStorage.setItem("userThemePreference", "dark");
} else {
    localStorage.setItem("userThemePreference", "light");
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
                this.themeClass = "";
            } else {
                localStorage.setItem("themeColor", "dark");
                this.themeClass = "dark";
            }
        },
    };
}
