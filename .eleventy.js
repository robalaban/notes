const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = (eleventyConfig) => {
    // Plugins
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Filters
    eleventyConfig.addFilter("dateDisplay", require("./filters/date.js"));

    // Collections
    eleventyConfig.addCollection("note", (collection) => {
        const notes = collection.getFilteredByTag("note");

        for (let i = 0; i < notes.length; i++) {
            const prevPost = notes[i - 1];
            const nextPost = notes[i + 1];
            notes[i].data["prevPost"] = prevPost;
            notes[i].data["nextPost"] = nextPost;
        }

        return notes.reverse();
    });

    // Layout aliases
    eleventyConfig.addLayoutAlias("default", "layouts/default.njk");
    eleventyConfig.addLayoutAlias("post", "layouts/note.njk");

    // Integrate Node Modules

    eleventyConfig.addPassthroughCopy({
        "./node_modules/alpinejs/dist/alpine.js": "./js/alpine.js",
    });

    // Include assets
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("images");

    return {
        templateFormats: ["md", "njk"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        passthroughFileCopy: true,

        dir: {
            input: "site",
            output: "_output",
            includes: "includes",
            data: "globals",
        },
    };
};
