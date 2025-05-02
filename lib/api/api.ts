import { CreateReply, Guestbook, Reply } from '@/types/guestbook';
import axios from 'axios'; //프론트랑 백엔드 연결

const API_URL = 'http://localhost:3005';

export const getGuestbooks = async (): Promise<Guestbook[]> => {
  const response = await axios.get(`${API_URL}/guestbook`);
  return response.data;
};
export const createGuestbook = async (
  guestbook: Pick<Guestbook, 'author' | 'content'>
) => {
  const response = await axios.post(`${API_URL}/guestbook`, guestbook);
  return response.data;
};
export const getGuestbook = async (id: string) => {
  const response = await axios.get(`${API_URL}/guestbook/${id}`);
  return response.data;
};
export const createReply = async (reply: CreateReply): Promise<Reply> => {
  const response = await axios.post(`${API_URL}/comment`, reply);
  return response.data;
};
export const getComments = async (guestbookId: string): Promise<Reply[]> => {
  const response = await axios.get(`${API_URL}/comment`, {
    params: { guestbookId },
  });
  return response.data;
};

export const deleteGuestbook = async (ids: number[]) => {
  const response = await axios.delete(`${API_URL}/guestbook`, {
    data: { ids },
  });
  return response.data;
};
