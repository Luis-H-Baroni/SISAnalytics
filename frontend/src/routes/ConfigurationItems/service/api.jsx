import { api } from '../../../services/http';

export const addConfigurationItem = async (fields) => {
  console.log(fields)
  api.post('configuration-item', fields).then((response) => {
    console.log('resss', response)
    return true;
  }).catch((error) => {
    if(error.response.status === 400 || error.response.status === 500 || error.response.status === 404){
      return false;
    }
  });
};