const token = process.env.TOKEN || false
const git = require("simple-git")
const url = `https://D3Portillo:${token}@github.com/D3Portillo/self-taught-devs.git`

if (token) {
  git()
  .checkout("master")
  .add(".")
  .commit("merges_data[bot] :zap:")
  .push(url, "master")
} else console.log("Token not provided")
