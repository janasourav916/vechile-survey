const { generateModel } = require("fake-data-generator");
var fs = require("fs");
const model = require("./src/models/users.json");
const amountArg = 3000;
const modelArg = model;
const inputType = "object";
const outputType = "object";
const generatedModel = generateModel({
  amountArg,
  modelArg,
  inputType,
  outputType
});

fs.writeFile(
  "./src/data/users.json",
  JSON.stringify(generatedModel, null, 2),
  function (err) {
    if (err) throw err;
    console.log("Saved!");
  }
);
