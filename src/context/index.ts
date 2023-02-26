import { createContext } from 'react';

type ToggleT = {
  toggle: boolean;
  setToggle: (c: boolean) => void;
};

const SideBarContext = createContext<ToggleT>({
  toggle: false,
  setToggle: () => {},
});
export default SideBarContext;
