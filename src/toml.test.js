// This simply tries to parse toml file, if error happens workflow stops
const toml = require("toml")
const tomlFile = require("fs").readFileSync("./goodies.toml", {
  encoding: "utf8",
})
toml.parse(tomlFile)
console.log("You're ready to go!")
