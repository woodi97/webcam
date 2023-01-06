import React, { FC } from 'react';
import ModalPortal from './ModalPortal';
import ModalBase from './ModalBase';
import { SampleModalContent } from './Content';
import { ModalType } from '@/core/interface/modal-type';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { modalSelector } from '@/atom/modalAtom';

const selectRenderingModal: { [keys in ModalType]: JSX.Element } = {
  SAMPLE: <SampleModalContent />,
};

const ModalContainer: FC = () => {
  const [modal, setModal] = useRecoilState(modalSelector);
  const resetModalState = useResetRecoilState(modalSelector);

  return (
    <ModalPortal>
      <ModalBase
        title={modal.title ? modal.title : ''}
        show={modal.name ? true : false}
        onClose={resetModalState}
      >
        {modal.name && selectRenderingModal[modal.name]}
      </ModalBase>
    </ModalPortal>
  );
};

export default ModalContainer;
