const fs = require("fs")
const toml = require("toml")
const types = require("./types")
const { getParagraph, getGithubURL } = require("./helpers")

const GOODIES_KEY = "[[GOODIES]]"
const CONTRIBUTORS_KEY = "[[CONTRIBUTORS]]"
const GUIDE_KEY = "[[GUIDE]]"

const guide = []
const goodiesByType = {}
const contributors = {}

/**
 * The README.md template file
 * @type { String }
 */
const template = fs.readFileSync("./src/README.template.md", {
  encoding: "utf8",
})
const tomlFile = fs.readFileSync("./goodies.toml", {
  encoding: "utf8",
})
const goodies = toml.parse(tomlFile)

Object.keys(types.goodies).forEach((type) => {
  goodiesByType[type] = {}
})

Object.keys(goodies).forEach((goodieTitle) => {
  const {
    description = "",
    website = "#",
    contributor = "@d3portillo",
    type,
    money,
  } = goodies[goodieTitle]

  const parsedDescription = getParagraph(description)
  const goodieType = types.goodies[type] ? type : types.goodies.default
  const goodiePayment =
    types.payment[money] || types.payment[types.payment.default]
  const contribsCount = contributors[contributor] || 0
  contributors[contributor] = contribsCount + 1
  goodiesByType[goodieType][
    goodieTitle
  ] = `### [${goodieTitle}](${website}) \n> ${parsedDescription}\n${goodiePayment}`
})

const GOODIES = Object.keys(goodiesByType)
  .map((type) => {
    if (type == "default") return ""
    const title = types.goodies[type]
    guide.push(`- [${title}](#${getGithubURL(title)})`)
    const categoryInnerGoodies = Object.keys(goodiesByType[type])
      .map((goodieKey) => goodiesByType[type][goodieKey])
      .join("\n")
    return `# ${title} \n${categoryInnerGoodies}`
  })
  .join("\n\n")

const CONTRIBUTORS = Object.keys(contributors)
  .map((contributorKey) => {
    const contributorContribs = contributors[contributorKey]
    const contributor = contributorKey.replace("@", "")
    const url = `https://github.com/${contributor}`
    return `<tr><td><a href="${url}" title="@${contributor}"><img src="${url}.png?size=40"/></a>
    </td><td><a href="${url}" title="@${contributor}"><b>@${contributor}</b></a><br/>
    ${contributorContribs} goodies agregados</td></tr>`
  })
  .join("")

const GUIDE = guide.join("\n")

try {
  const ms0 = new Date().getMilliseconds()
  const README = template
    .replace(GOODIES_KEY, GOODIES)
    .replace(CONTRIBUTORS_KEY, CONTRIBUTORS)
    .replace(GUIDE_KEY, GUIDE)
  fs.writeFile("./README.md", README, () => {
    const timeElapsed = new Date().getMilliseconds() - ms0
    console.log(`README.md built in ${timeElapsed}ms`)
  })
} catch (error) {
  console.error({ error })
}
