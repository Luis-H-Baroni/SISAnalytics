exports.example = async (payload) => {
  try {
    const result = payload + ' repository'
    return result
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}
