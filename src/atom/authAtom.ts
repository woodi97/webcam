import { atom, selector } from 'recoil';

export type AuthShape = {
  token: string | null;
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  } | null;
};

const authState = atom<AuthShape>({
  key: 'auth',
  default: {
    token: null,
    user: null,
  },
});

const authSelector = selector<AuthShape>({
  key: 'authSelector',
  get: ({ get }) => get(authState),
  set: async ({ set }, value) => {
    set(authState, value);
  },
});

export { authState, authSelector };
