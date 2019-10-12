const token = process.env.TOKEN || false
const git = require("simple-git")
const url = `https://D3Portillo:${token}@github.com/D3Portillo/self-taught-devs.git`
const push = () => {
  git()
    .checkout("master")
    .add(".")
    .commit("merges_data[bot] :zap:")
    .push(url, "master")
}
if (token) {
  try {
    git().removeRemote("origin")
    push()
  } catch (_) {
    push()
  }
} else console.log("Token not provided")
