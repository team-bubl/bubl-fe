import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://team-bubl-api.herokuapp.com/api',
    headers: {
      Authorization: token
    }
  })
}