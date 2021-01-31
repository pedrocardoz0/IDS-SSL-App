import Axios from 'axios';
import {api} from './api.json';

const reportAPI = {
  async create(reportBody) {
    return await Axios({
      method: 'POST',
      url: `${api}/v1/report/comorbity`,
      data: reportBody,
    });
  },

  async list() {
    return await Axios({
      method: 'GET',
      url: `${api}/v1/report/comorbity`,
    });
  },

  async update(message) {
    return await Axios({
      method: 'PUT',
      url: `${api}/v1/report/comorbity`,
      data: message,
    });
  },
};

export default reportAPI;
