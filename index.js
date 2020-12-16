const fs = require("fs");

const random = Math.random();
fs.writeFileSync("./index.html", `<html><head></head><body><h1>A real change</h1><p>${random}</p></body></html>`);