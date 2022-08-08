export async function getAllProducts(url) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error(error)
  }
}
