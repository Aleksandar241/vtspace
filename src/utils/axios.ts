import axios from 'axios';

const axiosInstance = axios.create({ baseURL: import.meta.env.VITE_API_URL });

const config = {
  headers: {
    'Access-Control-Allow-Origin': import.meta.env.VITE_API_URL,
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  },
  withCredentials: true
};

export const get = async (path: string) => await axiosInstance.get(path, config);

export const post = async (url: string, body: object = {}) =>
  await axiosInstance.post(url, { ...body }, config);
