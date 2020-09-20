---
title: Building my personal website
date: 2020-09-19
tags:
    - note
    - javascript
    - tutorials
---

I've been putting off building a personal website for such a long time. I couldn't find a good enough reason to spend time creating one. Questions like the following kept coming up:

-   Are personal website _even_ useful in the era of Twitter / Github?
-   Is my content worth sharing?

However, I still found myself thinking of what my _"corner"_ of the web would look like. I had to change perspective, I had to make the project interesting enough. Luckily turns out that making a personal website is the perfect opportunity to pick-up and learn some new technologies / methodologies. After spending a good few hours seaching - I stumbled upon a few really interesting projects that I had to give a try. The culprits composing the stack for my webiste are the following:

-   [Snowpack](https://www.snowpack.dev/) - Build tool
-   [PostCSS](https://postcss.org/) - Modern CSS
-   [Native Elements](https://native-elements.dev/) - HTML Components
-   [Eleventy](https://www.11ty.dev/) - Static Site Generator

Now that I have chosen and am pretty happy with the stack, I had to find out why build something from the ground up, and not use an existing framework / starter template? The answer was quite simple: _I want to make the website as user friendly as possible._ Things that are important to me:

-   Accessability ( fonts, colors, navigation )
-   Quick build time ( The turnaround time needs to be fast )
-   Serverless ( I don't want to have any dependencies )

### Setting up the environment

```
mkdir Notes && cd Notes
npm init -y
```
