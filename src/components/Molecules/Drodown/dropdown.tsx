import { useState } from "react";
import Button from "../../Atoms/Button";
import { DropdownOptions } from "./style";
import { dropdownProps } from "./type";
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
                            </li>
                        )}
                    </ul>
                </DropdownOptions>
            } 
        </>
    )
}
export default Dropdown;