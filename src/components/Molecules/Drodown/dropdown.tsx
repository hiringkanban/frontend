import { useState } from "react";
import Button from "../../Atoms/Button";
import { DropdownOptions } from "./style";
import { dropdownProps } from "./type";
import Modal from "../Modal";
const Dropdown:React.FC<dropdownProps> = ({ menu }) => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(!open)}>choose</Button>
            {open && 
                <DropdownOptions>
                    <ul>
                        {menu.map((item) => 
                            <li onClick={() => item.onClick()}>
                                {item.name}
                                {item?.modal}
                            </li>
                        )}
                    </ul>
                </DropdownOptions>
            } 
        </>
    )
}
export default Dropdown;