const fs = require("fs");

fs.readFile("public/js/index.js", "utf-8", (err, data) => {
    if (err) throw err;

    const regex = /"use strict";A\.exports="[a-zA-Z0-9_\/+]{500,}"/;

    const newStr = data.replace(regex, "\"use strict\";A.exports=\"\"");

    fs.writeFile("public/js/index.js", newStr, "utf-8", (err) => {
        if (err) throw err;

        console.log("Minification completed");
    });
});