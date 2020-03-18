const git = require("simple-git")
const TOKEN = process.env.TOKEN || false
const USER = "d3portillo@gmail.com"
const REPO = "github.com/D3Portillo/self-taught-devs.git"
const url = `https://${USER}:${TOKEN}@${REPO}`
if (TOKEN) {
  git()
  .checkout("master")
  .add(".")
  .commit("merges_data[bot] :zap:")
  .push(url, "master")
} else console.log("Token not provided")
