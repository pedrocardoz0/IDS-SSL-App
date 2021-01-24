import Axios from 'axios';
import {auth, authorization} from './api.json';

const AuthAPI = {
  login(email, password) {
    return Axios({
      method: 'POST',
      url: auth,
      data: {email, password},
      withCredentials: true,
    });
  },

  authorization() {
    return Axios({
      method: 'GET',
      url: authorization,
    });
  },
};

export default AuthAPI;
