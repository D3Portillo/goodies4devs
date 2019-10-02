const fs = require("fs")
const README = require("./README")
const CONTRIBUTING = require("./CONTRIBUTING")
new Promise((cb, err) => {
  try {
    const ms1 = new Date().getMilliseconds()
    fs.writeFile("./README.md", README, () => {
      fs.writeFile("./CONTRIBUTING.md", CONTRIBUTING, () => {
        cb(
          `README and CONTRIBUTING built in: ${new Date().getMilliseconds() -
            ms1}ms`
        )
      })
    })
  } catch (e) {
    err(e)
  }
})
  .then(console.log)
  .catch(console.error)
