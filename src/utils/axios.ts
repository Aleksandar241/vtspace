import axios from 'axios';

const axiosInstance = axios.create({ baseURL: import.meta.env.VITE_API_URL });

const config = {
  headers: {
    'Access-Control-Allow-Origin': import.meta.env.VITE_API_URL,
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  },
  withCredentials: true
};

export const get = async (url: string) => await axiosInstance.get(url, config);

export const del = async (url: string) => await axiosInstance.delete(url, config);

export const post = async (url: string, body: object = {}) =>
  await axiosInstance.post(url, { ...body }, config);

export const put = async (url: string, body: object = {}) =>
  await axiosInstance.put(url, { ...body }, config);
