const token = process.env.TOKEN || false
const git = require("simple-git")
const remote = `https://D3Portillo:${token}@self-taught-devs`
if (token) {
  git()
    .addConfig("user.name", "D3Portillo")
    .addConfig("user.email", "d3portillo@gmail.com")
    .checkout("master")
    .add(".")
    .commit("merges_data[bot] :zap:")
    .push(remote)
} else console.log("Token not provided")
