import { api } from '../../../services/http';

export const addConfigurationItem = async (fields) => {
  api.post('configuration-item', fields).then((response) => {
    return true;
  }).catch((error) => {
    if(error.response.status === 400 || error.response.status === 500 || error.response.status === 404){
      return false;
    }
  });
};

export const getConfigurationItems = async () => {
  const response = await api.get('configuration-item');
  console.log(response)
  return response.data;
}

export const deleteConfigurationItem = async (id) => {
  const response = await api.delete(`configuration-item/${id}`);
  return response.data;
}