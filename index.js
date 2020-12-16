const fs = require("fs");

const random = Math.random();
fs.writeFileSync("./index.html", `<html><head></head><body><p>${random}</p></body></html>`);