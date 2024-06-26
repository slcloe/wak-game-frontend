import { axiosInstance } from './base';

export const login = async (nickname: string) => {
  const response = await axiosInstance.post(
    `/users`,
    {
      nickname: nickname,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return response.data;
};
