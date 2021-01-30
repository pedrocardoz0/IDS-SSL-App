import Axios from 'axios';
import {api} from './api.json';

const patientAPI = {
  async list() {
    return await Axios({
      method: 'GET',
      url: `${api}/v1/patient`,
    });
  },
};

export default patientAPI;
