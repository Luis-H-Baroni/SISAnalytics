import { api } from '../../../services/http';

export const getEvent = async () => {
  try {
    const response = await api.get('event/');
    return response.data;
  } catch(error){
    throw error;
  }
}

export const getEventId = async (id) => {
  try{
    const response = await api.get(`event/`, { eventId: id });
    return response.data[0];
  } catch(error){
    throw error;
  }
}

export const addEvent = async (fields) => {
  try {
    const response = await api.post('event/', fields);
    return response.data;
  } catch(error){
    throw error;
  }
};

export const editEvent = async (id, fields) => {
  try {
    const response = await api.put(`event/`, fields, { eventId: id });
    return response.data;
  } catch(error){
    throw error;
  }
}

export const deleteEvent = async (fields) => {
  try {
    const response = await api.delete(`event`, fields);
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