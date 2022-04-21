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

  if (array.length > 0) {
    array.forEach((e) => {
      month.push(e.day?.split("-")[1])
    })
  }

  if (month.length > 0) {
    for (const e of months) {
      for (const i of month) {
        if (months.indexOf(e) === i) {
          allMonths.push(e)
        }
      }
    }
  }
}
