let goodies = require("fs").readFileSync("./goodies.toml", { encoding: "utf8" })
goodies = require("toml").parse(goodies)
console.log("Yaay all right!")
