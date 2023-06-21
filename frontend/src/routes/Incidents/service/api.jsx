import { api } from '../../../services/http';

export const getIncident = async () => {
  try {
    const response = await api.get('incident');
    return response.data;
  } catch(error){
    throw error;
  }
}

export const getIncidentId = async (id) => {
  try{
    const response = await api.get(`incident/`, { incidentId: id });
    return response.data[0];
  } catch(error){
    throw error;
  }
}

export const addIncident = async (fields) => {
  try {
    const response = await api.post('incident', fields);
    return response.data;
  } catch(error){
    throw error;
  }
};

export const editIncident = async (id, fields) => {
  try {
    const response = await api.put(`incident/`, fields, { incidentId: id });
    return response.data;
  } catch(error){
    throw error;
  }
}

export const deleteIncident = async (fields) => {
  try {
    const response = await api.delete(`incident`, fields);
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