export default function finMaxMonth(array) {
  const months = [
    undefined,
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ]
  const month = []
  const allMonths = []
  array.forEach((e) => {
    month.push(parseInt(e.day?.split("-")[1]))
  })

  const monthsLength = months.map((e, index) => {
    const maxLength = []
    for (const m of month) {
      if (index === m) {
        maxLength.push(e)
      }
    }
    return maxLength
  })

  monthsLength.forEach((e, index) => {
    for (const i of months) {
      if (e.length > 0 && e[0] === i) {
        allMonths.push({
          [e[0]]: e.length,
        })
      }
    }
  })
  allMonths.sort((a, b) => {
    return b[Object.keys(b)[0]] - a[Object.keys(a)[0]]
  })
  return Object.keys(allMonths[0])
}
