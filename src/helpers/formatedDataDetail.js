export default function formatedDataDetail(array, name) {
  const arrFinal = []
  array.forEach((e) => {
    if (e.nameAgency === name) {
      arrFinal.push({
        name: e.name || "name not found",
        persons: e.persons || "persons not found",
        day: e.day || "day not found",
        hour: e.hour || "hour not found",
        finalPrice: e.finalPrice || "finalPrice not found",
        id: e.id,
      })
    }
  })
  return arrFinal
}
