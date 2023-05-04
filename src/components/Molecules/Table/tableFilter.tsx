import React, { useState, useRef } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import Portal from '../../Atoms/Portal/portal';
import { StyledFilterBody } from './style';
import Button from '../../Atoms/Button';
import { TableFilterProps } from './type';
import CheckBox from '../../Atoms/Checkbox';

const TableFilter: React.FC<TableFilterProps> = ({ options, data, setData, column }) => {
  const [open, setOpen] = useState(false);
  const filterRef = useRef<string[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { innerWidth } = window;
  const [bodyCoordinates, setBodyCoordinates] = useState({
    x: 0,
    y: 0,
    height: 0,
    width: 0,
  });

  const handleButtonClick = () => {
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

  const onCheckValues = (values: any) => {
    filterRef.current = [...values];
    const newData = data.filter((a) => column.onFilter?.(filterRef.current, a));
    setData(newData);
  };
  console.log(filterRef.current);
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div>
        <Button size="small" ref={buttonRef} onClick={handleButtonClick}>
          {' '}
          Filter{' '}
        </Button>
        {open && (
          <Portal>
            <StyledFilterBody coords={bodyCoordinates} window={innerWidth}>
              <CheckBox.Group
                options={options}
                onChange={onCheckValues}
                defaultValue={filterRef.current}
              />
            </StyledFilterBody>
          </Portal>
        )}
      </div>
    </ClickAwayListener>
  );
};

// TableFilter.displayName = 'TableFilter';
export default TableFilter;
