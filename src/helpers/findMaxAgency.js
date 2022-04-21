export default function findMax(array) {
  const maxAgency = []
  array.forEach((e) => {
    maxAgency.push(e.finalPrice)
  })
  const aux = Math.max(...maxAgency)

  array.forEach((e) => {})

  for (const e of array) {
    if (aux === e.finalPrice) {
      return [e.nameAgency, e.finalPrice]
    }
  }
}
