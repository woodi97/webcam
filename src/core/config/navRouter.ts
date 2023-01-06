import { SVGTypes } from '@/components/common/Icon/Icon';

export type NavRouterType = {
  path: string;
  name: string;
  icon: SVGTypes;
};

export const navRouter: NavRouterType[] = [
  {
    path: '/',
    name: 'Camera',
    icon: 'camera',
  },
  {
    path: '/posts',
    name: 'write',
    icon: 'plusCircle',
  },
  {
    path: '/profile',
    name: 'Profile',
    icon: 'profile',
  },
];
