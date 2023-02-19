/* eslint-disable react/jsx-props-no-spreading */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { StyledBoardItem, StyledDetail } from './style';

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
          <h4>{item.name}</h4>
          <h5>Founder @ google</h5>
          <StyledDetail>
            <div>
              <FontAwesomeIcon icon={['far', 'clock']} /> <span>5d Ago</span>
            </div>
            <div>
              <FontAwesomeIcon icon={['fas', 'location-dot']} /> <span>Algeria</span>
            </div>
          </StyledDetail>
        </StyledBoardItem>
      )}
    </Draggable>
  );
};

export default BoardItem;
