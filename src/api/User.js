import Axios from 'axios';
import {api} from './api.json';

const userAPI = {
  async get() {
    const result = await Axios({
      method: 'GET',
      url: `${api}/v1/user`,
    });

    return result;
  },

  async me() {
    const result = await Axios({
      method: 'GET',
      url: `${api}/v1/me`,
    });

    return result;
  },

  async logout() {
    return await Axios({
      method: 'POST',
      url: `${api}/logout`,
    });
  },
};

export default userAPI;
