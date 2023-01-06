import React, { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { modalOverlayVariants, modalVariants } from '@/animations/modal';

interface ModalBaseShape {
  show: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const ModalBase: FC<ModalBaseShape> = ({
  show,
  title = import.meta.env.APP_TITLE,
  onClose,
  children,
}) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {show && (
        <motion.div
          id={`modal-base=${title}`}
          className="fixed flex justify-center items-center top-0 left-0 z-[1000] w-full h-full"
          initial="enter"
          animate="center"
          exit="exit"
        >
          <motion.div
            className="absolute top-0 left-0 z-[998] w-full h-full bg-black/50 dark:bg-gray/50"
            variants={modalOverlayVariants}
            onClick={() => {
              onClose();
            }}
          />
          <motion.div
            className="relative z-[998] w-full sm:max-w-lg sm:min-w-[20rem] rounded-md p-8 bg-gray-300 dark:bg-gray-900"
            variants={modalVariants}
          >
            <h1 className="text-2xl text-center py-2">{title}</h1>
            <div className="py-5">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalBase;
