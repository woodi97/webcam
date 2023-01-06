import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const ModalPortal: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.getElementById('modal') as HTMLElement)
    : null;
};

export default ModalPortal;
