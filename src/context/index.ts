import { createContext } from "react";
type contextT = {
    toggle: boolean
    setToggle: (c: boolean) => void
}

export const SideBarContext = createContext<contextT>({
    toggle: false, 
    setToggle: (c: boolean) => {}
});
