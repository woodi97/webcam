import React, { FunctionComponent } from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';

type Props = {
  className?: string;
  transparent?: boolean;
  children?: React.ReactNode;
};

const Header: FunctionComponent<Props> = ({
  className,
  transparent = false,
  children,
}) => {
  return (
    <header className="relative">
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        className={cx(
          'z-20 w-full max-w-mobile-app h-gb-header top-0',
          'px-side-padding py-2',
          'flex justify-between items-center align-middle',
          'font-bold',
          false ? 'fixed' : 'absolute',
          transparent && 'bg-transparent',
          className,
        )}
      >
        {children}
      </motion.div>
    </header>
  );
};

export default Header;
