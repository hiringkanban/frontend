import { useRef, useState } from 'react';
import Button from '../../Atoms/Button';
import Portal from '../../Atoms/Portal/portal';
import DropdownOptions from './style';
import { DropdownProps, DropDownItemProps } from './type';
import useOutsideClick from '../../../hooks/useOutsideClick';

const Dropdown: React.FC<DropdownProps> = ({ menuItems, name }) => {
  const { innerWidth } = window;
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [bodyCoordinates, setBodyCoordinates] = useState({
    x: 0,
    y: 0,
    height: 0,
    width: 0,
  });

  useOutsideClick(dropdownRef, () => setOpen(false));

  const handleButtonClick = (e: React.MouseEvent) => {
    setOpen(!open);
    if (buttonRef.current) {
      const coords = buttonRef.current.getBoundingClientRect();
      setBodyCoordinates({
        x: coords.x,
        y: coords.y,
        height: coords.height,
        width: coords.width,
      });
    }
  };

  const handleElementClick = (e: React.MouseEvent, item: DropDownItemProps) => {
    item.onClick();
    setOpen(!open);
  };

  return (
    <div ref={dropdownRef}>
      <Button onClick={handleButtonClick} size="small" ref={buttonRef}>
        {name}
      </Button>
      {open && (
        <Portal>
          <DropdownOptions
            justifyTop={buttonRef.current && buttonRef.current.offsetHeight}
            coords={bodyCoordinates}
            window={innerWidth}
          >
            <ul>
              {menuItems.map((item) => (
                <li key={item.id} onClick={(e) => handleElementClick(e, item)} aria-hidden="true">
                  {item.icon}
                  {item.name}
                </li>
              ))}
            </ul>
          </DropdownOptions>
        </Portal>
      )}
    </div>
  );
};
export default Dropdown;
