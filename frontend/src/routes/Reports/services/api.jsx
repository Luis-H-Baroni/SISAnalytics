import api from "../../../services/http"

export const getIncidents = async () => {
  try {
    const response = await api.get('/incident')
    return response.data;
  } catch (error) {
    console.log(error)
  }
}


export const getEvents = async () => {
  try {
    const response = await api.get('/event')
    return response.data;
  } catch (error) {
    console.log(error)
  }
}