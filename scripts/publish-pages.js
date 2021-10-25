const fs = require("fs");
const path = require("path");
const ghpages = require('gh-pages');

fs.copyFileSync(path.resolve("404.md"), path.resolve("dist") + "/404.md")
fs.copyFileSync(path.resolve("CNAME"), path.resolve("dist") + "/CNAME")

ghpages.publish(
    path.resolve("dist"),
    {
        branch: 'pages',
    },
    console.log
);