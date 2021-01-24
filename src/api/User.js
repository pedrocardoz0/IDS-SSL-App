import Axios from 'axios';
import {api} from './api.json';

const userAPI = {
  async get() {
    const result = await Axios({
      method: 'GET',
      url: `${api}/v1/user`,
    });
    // console.log(result)
    return result;
  },
};

export default userAPI;
