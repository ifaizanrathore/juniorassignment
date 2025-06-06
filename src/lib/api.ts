import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const getPost = async (id: string) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

export const usePosts = () => {
  return useQuery({ queryKey: ['posts'], queryFn: getPosts });
};
