import axios from 'axios';
import qs from 'qs';
// import AuthService from './AuthService';

const baseUrl = 'http://localhost:8080';
// const user = new AuthService();

// const defineHeaderAxios = async () => {
//   await user.getUser().then(
//     (userInfo) => {
//       axios.defaults.headers.common.Authorization = `Bearer ${userInfo.id_token}`;
//     }, (err) => {
//       console.log(err);
//     },
//   );
// };

const defaultGet = async (api, data) => {
  // await defineHeaderAxios();
  return axios
    .get(baseUrl + api, {
      params: {
        ...data,
      },
    })
    .then(response => response.data)
    .catch((err) => {
      console.log(err);
    });
};

const defaultPost = async (api, data) => {
  // await defineHeaderAxios();
  return axios
    .post(baseUrl + api, qs.stringify(data), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then(response => response.data)
    .catch((err) => {
      console.log(err);
    });
};

const defaultPut = async (api, target, data) => {
  // await defineHeaderAxios();
  return axios
    .put(baseUrl + api, qs.stringify(data), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: {
        ...target,
      },
    })
    .then(response => response.data)
    .catch((err) => {
      console.log(err);
      return {
        status: err.response.status,
        data: err.response.data,
      };
    });
};

const defaultDelete = async (api, data) => {
  // await defineHeaderAxios();
  return axios
    .delete(baseUrl + api, {
      params: {
        ...data,
      },
    })
    .then(response => response.data)
    .catch((err) => {
      console.log(err);
      return {
        status: err.response.status,
        data: err.response.data,
      };
    });
};

export {
  defaultGet,
  defaultPost,
  defaultPut,
  defaultDelete,
};
