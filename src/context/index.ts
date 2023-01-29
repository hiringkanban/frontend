import { createContext } from 'react';

type ContextT = {
  toggle: boolean;
  setToggle: (c: boolean) => void;
};

const SideBarContext = createContext<ContextT>({
  toggle: false,
  setToggle: () => {},
});
export default SideBarContext;
