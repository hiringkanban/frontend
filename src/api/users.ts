import axios from 'axios';

const url = 'http://127.0.0.1:3000/users';

export type UserT = {
  name: string;
  email: string;
  password: string;
};

export type CredentialsT = Omit<UserT, 'name'>;

export const getallUsers = async (id?: number) => {
  return axios.get(`${url}/${id}`);
};

export const addUser = async (user: UserT) => {
  return axios.post(url, user);
};

export const editUser = async (id: number, user: UserT) => {
  return axios.put(`${url}/${id}`, user);
};

export const deleteUser = async (id: number) => {
  return axios.delete(`${url}/${id}`);
};

export const auth = async (credentials: CredentialsT) => {
  return axios.get(`${url}/?email=${credentials.email}&password=${credentials.password}`);
};
