import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'http://localhost:3001/api/' });

const config = {
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3001/api/',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  },
  withCredentials: true
};

export const get = async (path: string) => await axiosInstance.get(path, config);

export const post = async (url: string, body: object = {}) =>
  await axiosInstance.post(url, { ...body }, config);
