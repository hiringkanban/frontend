/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import StyledBoardItem from './style';

type ItemT = {
  id: string;
  name: string;
};

interface BoardProps {
  item: ItemT;
  index: number;
}

const BoardItem: React.FC<BoardProps> = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <StyledBoardItem
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {item.name}
        </StyledBoardItem>
      )}
    </Draggable>
  );
};

export default BoardItem;
