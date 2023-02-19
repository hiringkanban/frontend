/* eslint-disable react/jsx-props-no-spreading */
import { Droppable } from 'react-beautiful-dnd';
import BoardItem from '../BoardItem';
import { StyledBoardColumn, BoardColumnBody } from './style';

interface BoardColProps {
  column: { title: string; items: string[] };
  items: { id: string; name: string }[];
  id: string;
}

const BoardCol: React.FC<BoardColProps> = ({ column, id, items }) => {
  return (
    <StyledBoardColumn>
      <h3>{column.title}</h3>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <BoardColumnBody
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            isScroll={items.length >= 5}
          >
            {items.map((item, index) => {
              return <BoardItem key={item.id} item={item} index={index} />;
            })}
            {provided.placeholder}
          </BoardColumnBody>
        )}
      </Droppable>
    </StyledBoardColumn>
  );
};
export default BoardCol;
