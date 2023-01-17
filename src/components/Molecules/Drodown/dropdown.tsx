import { useRef, useState } from "react";
import Button from "../../Atoms/Button";
import Portal from "../../Atoms/Portal/portal";
import { DropdownOptions } from "./style";
import { dropdownProps } from "./type";
const Dropdown:React.FC<dropdownProps> = ({ menu }) => {

    const [open, setOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [bodyCoordinates, setBodyCoordinates] = useState({x : 0, y : 0, height: 0});

    /*useEffect(() => {
        document.addEventListener('click', onClickoutside);

        return () => document.addEventListener('click', onClickoutside);
    }, [dropdownRef]);*/

    const handleButtonClick = () => {
        setOpen(!open);
        if (buttonRef.current) {
            const coords = buttonRef.current.getBoundingClientRect();
            setBodyCoordinates({x: coords.x, y: coords.y, height: coords.height })
        }
    }

    return (
        <div>
            <Button 
                onClick={handleButtonClick}
                ref={buttonRef}
            >
                    choose
            </Button>
            {open && 
            <Portal>
                <DropdownOptions 
                    justifyTop={buttonRef.current && buttonRef.current.offsetHeight}
                    coords={bodyCoordinates}
                >
                    <ul>
                        {menu.map((item) => 
                            <li onClick={() => item.onClick()}>
                                {item.icon}
                                {item.name}
                            </li>
                        )}
                    </ul>
                </DropdownOptions>
            </Portal>
            } 
        </div>
    )
}
export default Dropdown;