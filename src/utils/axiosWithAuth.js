import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    // TODO edit API base URL
    baseURL: 'http://localhost:5000/api/',
    headers: {
      Authorization: token
    }
  })
}