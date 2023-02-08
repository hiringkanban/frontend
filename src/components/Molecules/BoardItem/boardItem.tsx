import React from 'react';
import { useDrag } from 'react-dnd';

interface BoardProps {
  title: string;
  item: {
    id: number;
    title: string;
    col: string;
  };
}

const BoardItem: React.FC<BoardProps> = ({ title, item }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'Item',
    item: { ...item },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div ref={drag} style={{ opacity }}>
      {title}
    </div>
  );
};

export default BoardItem;
