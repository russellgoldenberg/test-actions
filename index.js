const fs = require("fs");

const template = fs.readFileSync("./template.html", "utf8");

const date = new Date();

const time = date.toLocaleTimeString();

const html = template.replace("<!-- time -->", time);

fs.writeFileSync("./index.html", html);