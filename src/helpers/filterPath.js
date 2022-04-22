export default function filterPath(path) {
  if (path.pathname === "/empresas") {
    return "Empresa"
  } else if (path.pathname === "/") {
    return "Saltar Intro!!"
  } else {
    const aux = path.pathname?.split("/")[2]?.split("%20").join(" ")
    return `Empresa > ${aux}`
  }
}
