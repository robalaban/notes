if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    document.querySelector("html").classList.add("dark");
} else {
    document.querySelector("html").classList.remove("dark");
}

function themeToggle() {
    console.log("here");
    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.querySelector("html").classList.add("dark");
    } else {
        document.querySelector("html").classList.remove("dark");
    }
}

function toggle() {
    console.log("clicked");
    if (localStorage.theme === "dark") {
        localStorage.theme = "light";
    } else {
        localStorage.theme = "dark";
    }
}
