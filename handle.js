const fs = require("fs");
let data = require("./tzData");

handleData = async () => {
  data = data.map((x) => {
    return {
      label: `(GMT${x.rawFormat.substring(0, 6)}) ${x.countryName}/${
        x.name.split("/")[1]
      }`,
      tzCode: `${x.countryName}/${x.name.split("/")[1]}`,
      name: `GMT${x.rawFormat}`,
      utc: x.rawFormat.substring(0, 6),
    };
  });

  await Promise.all(data);

  fs.writeFile("timezone.json", JSON.stringify(data), (err) => {
    if (err) return console.log(err);
    console.log(data);
  });
};

handleData();
