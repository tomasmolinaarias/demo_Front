export function prom(data, text, extract) {
  const finalItemsDates = []
  const resultFilter = data.filter(element => element.name.substring(0, extract).toUpperCase() === text)
  const orderDate = resultFilter.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  )
  for (let i = orderDate.length - 1; i >= 0; i--) {
    finalItemsDates.push(orderDate[i])
    if (finalItemsDates[finalItemsDates.length - 1].date !== orderDate[i - 1].date) {
      break
    }
  }
  const prices = finalItemsDates.map(element => parseInt(element.price.replace(/[$.]/g, "").trim()))
  const prom = prices.reduce((a, b) => {
    return a + b
  }, 0) / prices.length
  return prom
}

