const token = process.env.TOKEN || false
const git = require("simple-git")
const remote = `https://D3Portillo:${token}@self-taught-devs`
if (token) {
  git()
    .add(".")
    .commit("merges_data[bot] :zap:")
    .push(remote)
} else console.log("Token not provided")
