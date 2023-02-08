import React from 'react';
import { useDrop } from 'react-dnd';

interface DropWrapperProps {
  onDrop: () => void;
  children: React.ReactElement;
}

const DropWrapper: React.FC<DropWrapperProps> = ({ onDrop, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'item',
    drop: () => {
      onDrop();
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return <div ref={drop}>{React.cloneElement(children, { isOver })}</div>;
};

export default DropWrapper;
