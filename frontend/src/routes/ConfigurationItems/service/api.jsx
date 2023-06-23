import { api } from '../../../services/http';

export const getConfigurationItems = async () => {
  try {
    const response = await api.get('configuration-item');
    return response.data;
  } catch(error){
    throw error;
  }
}

export const getConfigurationItemId = async (id) => {
  try{
    const response = await api.get(`configuration-item/${id}`);
    return response.data;
  } catch(error){
    throw error;
  }
}

export const addConfigurationItem = async (fields) => {
  try {
    const response = await api.post('configuration-item', fields);
    return response.data;
  } catch(error){
    throw error;
  }
};

export const editConfigurationItem = async (id, fields) => {
  try {
    const response = await api.put(`configuration-item/${id}`, fields);
    return response.data;
  } catch(error){
    throw error;
  }
}

export const deleteConfigurationItem = async (id) => {
  try{
    const response = await api.delete(`configuration-item/${id}`);
    return response.data;  
  } catch(error){
    throw error;
  }  
}
