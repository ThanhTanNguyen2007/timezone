const fs = require("fs");

const data = require("./data");

const newData = data.map((x) => {
  const index = x.indexOf(")");
  return {
    label: x,
    tzCode: x.slice(index + 2),
    utc: x.slice(1, index),
  };
});

(async () => await Promise.all(newData))();
let dataStr = JSON.stringify(newData);
fs.writeFileSync("testTZ.json", dataStr);

console.log(newData);
