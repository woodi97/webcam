import React, { FC, useRef } from 'react';
import useWindowResize from '@/hooks/useWindowResize';

import cx from 'classnames';

import Header from './Header';
import Navigation from './Navigation';

const PageLayout: FC<{
  children: React.ReactNode;
  fullWidth?: boolean;
  fixedHeight?: boolean;
  headerFixed?: boolean;
  headerTransparent?: boolean;
  headerBackgroundColor?: string;
  headerContent?: React.ReactNode;
}> = ({
  children,
  fullWidth = false,
  fixedHeight = false,
  headerTransparent = false,
  headerBackgroundColor,
  headerContent = (
    <h2 className="uppercase text-center w-full">
      {import.meta.env.VITE_APP_TITLE}
    </h2>
  ),
}) => {
  const mainRef = useRef<HTMLDivElement>(null);

  // to recalculate height when mobile browser search bar appeared and disappeared
  useWindowResize(() => {
    if (fixedHeight) {
      mainRef.current?.style.setProperty('height', `${window.innerHeight}px`);
    } else {
      mainRef.current?.style.setProperty('height', 'h-full');
    }
  }, 0);

  return (
    <div className="relative h-full overflow-hidden w-full bg-primary-500 max-w-mobile-app m-center">
      <Header transparent={headerTransparent} className={headerBackgroundColor}>
        {headerContent}
      </Header>
      <main
        ref={mainRef}
        className={cx(
          'relative m-center w-full h-screen pt-gb-header pb-bt-nav',
          fullWidth ? null : `max-w-mobile-app px-side-padding`,
          fixedHeight ? 'overflow-hidden' : 'min-h-screen',
        )}
      >
        {children}
      </main>
      <Navigation />
    </div>
  );
};

export default PageLayout;
