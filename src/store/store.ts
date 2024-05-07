import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface UserDataType {
  nickname: string;
  color: string;
}

interface Store {
  userData: UserDataType;
  setUserData: (userData: UserDataType) => void;
}

const useUserStore = create(
  persist<Store>(
    (set) => ({
      userData: { nickname: '', color: '' } as UserDataType,
      setUserData: (userData: UserDataType) => set(() => ({ userData })),
    }),
    {
      name: 'userStore',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useUserStore;
