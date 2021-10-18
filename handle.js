const fs = require("fs");

const data = require("./data");

const newData = data.map((x) => {
  const index = x.indexOf(")");
  return {
    label: x,
    tzCode: x
      .slice(index + 2)
      .replace(" ", "_")
      .replace("GMT+", "GMT_PLUS_")
      .replace("GMT-", "GMT_MINUS_"),
    name: x
      .slice(index + 2)
      .replace(/\//g, "_")
      .replace(" ", "_")
      .replace("-", "_"),
    utc: x.slice(4, index),
  };
});

(async () => await Promise.all(newData))();
let dataStr = JSON.stringify(newData);
fs.writeFileSync("testTZ.json", dataStr);

console.log(newData);
