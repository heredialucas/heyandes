const formatedData = (array) => {
  const arr = []
  const arrFinal = []
  for (const e of array) {
    const { nameAgency } = e
    arr.push(nameAgency)
  }
  const arrSet = new Set(arr)

  for (const e of arrSet) {
    const obj = {}
    let finalPriceTotal = 0
    for (const i of array) {
      if (e === i.nameAgency) {
        finalPriceTotal += i.finalPrice
        obj.nameAgency = e
        obj.finalPrice = finalPriceTotal
        obj.comision = finalPriceTotal * 0.025
        obj.id = i.id
      }
    }
    arrFinal.push(obj)
  }
  return arrFinal
}

export default formatedData
