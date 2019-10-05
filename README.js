const updates = require("./updates")
const toml = require("toml")
let goodies = require("fs").readFileSync("./goodies.toml", { encoding: "utf8" })
goodies = toml.parse(goodies)
const goodieTypes = require("./goodieTypes")
const colSize = 80
const contributors = {}
let guide = []
const getIfPaid = money => {
  const model = {
    paid: "de paga  :money_with_wings:",
    free: "gratuito :free:",
    freemium: "freemium  :money_with_wings::free:"
  }
  money = money || "none"
  if (money == "none") return ""
  return `<br/>**El goodie es: ${model[money]}**\n`
}
const wordwrap = s =>
  s.replace(
    new RegExp(`(?![^\\n]{1,${colSize}}$)([^\\n]{1,${colSize}})\\s`, "g"),
    "$1\n"
  )
const ghUrl = url =>
  url
    .replace(/ +/g, "-")
    .replace(/[^A-Z0-9-]/gi, "")
    .toLowerCase()
const types = {}

Object.keys(goodieTypes).forEach(type => {
  types[type] = {}
})
Object.keys(goodies).forEach(title => {
  const {
    description,
    website = "#",
    contributor = "@d3portillo",
    type = "none",
    money = "none"
  } = goodies[title]
  const prevArray = contributors[contributor]
  contributors[contributor] = prevArray
    ? [...prevArray, ghUrl(title)]
    : [ghUrl(title)]
  types[type][title] = `### [${title}](${website}) \n> ${wordwrap(
    description
  )}\n${getIfPaid(money)}`
})
const _goodies = Object.keys(types)
  .map(k => {
    const _type = goodieTypes[k]
    guide.push(`- [${_type}](#${ghUrl(_type)})`)
    return (
      `# ${_type} \n` +
      Object.keys(types[k])
        .map(tool => types[k][tool])
        .join("\n")
    )
  })
  .join("\n\n")

const _contributors = Object.keys(contributors)
  .map(contributor => {
    const mine = contributors[contributor]
    contributor = contributor[0].replace("@", "") + contributor.substr(1)
    const url = `https://github.com/${contributor}`
    return `<tr><td>
        <a href="${url}" title="@${contributor}"><img src="${url}.png?size=40"/></a>
        </td><td>${mine.length} goodies agregados</td></tr>`
  })
  .join("")

module.exports = `
# Self taught devs

Repositorio que intenta **acumular** una lista de temas y recursos para
desarrolladores y codificadores **autodidactas**, o que quieren aprender algo
nuevo, que de cierta manera no la verás en la Universidad

> Puede tener ciertos ó muchos **horrores** de ortografía, porfis ayudame , 
corrigiendo eso

### Updates

${updates.map((update, i) => {
  return `- **_Update ${i}_**: ${wordwrap(update)}`
})}

# The List

A continuación podras ver una lista de recursos y herramientas, con las que
puedes fortalecer la menera en que codificas :3

# Guía rapída

${guide.join("\n")}

${_goodies}

# Gracias ! 

<table>
  <tbody>
      ${_contributors}
  </tbody>
</table>

# Contribute
- [./CONTRIBUTING.md](./CONTRIBUTING.md)

> Cualquier PR es bienvenido ! 
`.trim("")
