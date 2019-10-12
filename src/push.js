const token = process.env.TOKEN || false
const git = require("simple-git")
const url = "https://github.com/D3Portillo/self-taught-devs.git"
if (token) {
  git()
    .checkout("master")
    .addConfig("user.name", "D3Portillo")
    .addConfig("user.email", "d3portillo@gmail.com")
    .add(".")
    .commit("merges_data[bot] :zap:")
    .push(url, "master")
} else console.log("Token not provided")
