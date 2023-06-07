
exports.validator = async (data) => {
  console.log('data no validator', data)
  console.log(data.length > 0)
  if(data.length > 0){
    return({ status: 400, message: 'Informe os dados.' })
  }

  return ({status: 200})
}