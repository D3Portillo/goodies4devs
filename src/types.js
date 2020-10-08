/**
 * Goodies and Payments types used on README.md list
 * If find any issue don't doubt on suggesting a review, change
 * or sending a PR
 */

const goodies = {
  /** Defaults to key in same object */
  default: "none",
  none: "Sin especificar",
  tool: "Herramientas",
  yt: "Youtubers",
  reading: "Libros / lectura",
  codecamp: "Codecamps",
  hack: "Hackathon / Codejam",
  tutorial: "Tutoriales",
  course: "Cursos",
  twitter: "Perfiles de Twitter",
  cheatsheet: "Cheat Sheets",
}

const payment = {
  /** Defaults to key in same object */
  default: "none",
  none: "",
  paid: "de paga :money_with_wings:",
  free: "gratuito :free:",
  freemium: "freemium :money_with_wings::free:",
}

module.exports = {
  goodies,
  payment,
}
