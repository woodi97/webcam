import { ModalType } from '@/core/interface/modal-type';
import { atom, selector } from 'recoil';

export type ModalShape = {
  name: ModalType | null;
  title: string | null;
  option?: unknown;
};

const modalState = atom<ModalShape>({
  key: 'modal',
  default: {
    name: null,
    title: null,
    option: null,
  },
});

const modalSelector = selector<ModalShape>({
  key: 'modalSelector',
  get: ({ get }) => {
    return get(modalState);
  },
  set: ({ set }, value) => {
    set(modalState, value);
  },
});

export { modalState, modalSelector };
