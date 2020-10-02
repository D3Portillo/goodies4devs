/**
 * build and README helper functions
 */

 /**
  * Parse a string to \n scaped paragraph
  * @param { String } s - String to parse
  * @param { Number } colSize - Max row lenght for paragraph
  */
const getParagraph = (s = "", colSize = 80) => {
  return s.replace(
    new RegExp(`(?![^\\n]{1,${colSize}}$)([^\\n]{1,${colSize}})\\s`, "g"),
    "$1\n"
  )
}
/**
 * Format string to Github readable URL
 * @param { String } url
 */
const getGithubURL = (url = "") => {
  return url
    .replace(/ +/g, "-")
    .replace(/[^A-Z0-9-]/gi, "")
    .toLowerCase()
}
module.exports = { getParagraph, getGithubURL }
