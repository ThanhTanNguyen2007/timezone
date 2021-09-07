const fs = require("fs");

handleData = async () => {
  let rawdata = fs.readFileSync("./data.json");

  let data = JSON.parse(rawdata);

  data = data.map((x) => {
    return {
      label: `${x.country}/${x.city} (${x.utc.replace("UTC", "GMT")})`,
      tzCode: `${x.country}/${x.city}`,
      name: `(${x.utc.replace("UTC", "GMT")}) ${x.city.replace("_", " ")} time`,
      utc: `${x.utc.substring(4)}`,
      city: x.city,
      country: x.country,
    };
  });

  fs.writeFile("timezone.json", JSON.stringify(data), (err) => {
    if (err) return console.log(err);
    console.log(data);
  });
};

handleData();
