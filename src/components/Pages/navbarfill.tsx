import Button from '../Atoms/Button';
import Logo from '../Atoms/Logo';

export const leftMenu = [
  { value: 'Features', href: '#' },
  { value: 'Pricing', href: '#' },
  { value: 'Blog', href: '#' },
];

export const rightMenu = [
  { value: 'Sign In', href: '/signin' },
  { value: <Button> Try it for free </Button>, href: '/signup' },
];

export const logo = <Logo />;
