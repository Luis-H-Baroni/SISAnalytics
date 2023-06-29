import { api } from '../../../services/http';

export const getSolution = async () => {
  try {
    const response = await api.get('solution');
    return response.data;
  } catch(error){
    throw error;
  }
}

export const getSolutionId = async (id) => {
  try{
    const response = await api.get(`solution/${id}`);
    return response.data;
  } catch(error){
    throw error;
  }
}

export const addSolution = async (fields) => {
  try {
    const response = await api.post('solution', fields);
    return response.data;
  } catch(error){
    throw error;
  }
};

export const editSolution = async (id, fields) => {
  try {
    console.log(id, fields)
    const response = await api.put(`solution/${id}`, fields);
    return response.data;
  } catch(error){
    throw error;
  }
}

export const deleteSolution = async (id) => {
  try{
    const response = await api.delete(`solution/${id}`);
    return response.data;  
  } catch(error){
    throw error;
  }  
}

export const getConfigurationItems = async () => {
  try {
    const response = await api.get('configuration-item');
    return response.data;
  } catch(error){
    throw error;
  }
}