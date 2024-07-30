const fs = require("fs");
let text = fs.readFileSync("text.txt","utf-8");
text = text.replace("YOU","we");
console.log(text);
fs.writeFileSync("ekta.txt","text");