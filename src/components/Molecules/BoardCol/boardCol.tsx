import { Droppable } from 'react-beautiful-dnd';
import Box from '../../Atoms/Box';
import BoardItem from '../BoardItem';
import StyledBoardColumn from './style';

interface BoardColProps {
  column: { id: string; name: string };
  items: { id: string; title: string; col: string }[];
}

const BoardCol: React.FC<BoardColProps> = ({ column, items }) => {
  return (
    <StyledBoardColumn>
      <h4>{column.name}</h4>
      <Droppable droppableId={column.id}>
        {(provided) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {items
              .filter((item) => item.col === column.id)
              .map((item, idx) => (
                <BoardItem key={item.id} item={item} index={idx} />
              ))}
          </div>
        )}
      </Droppable>
    </StyledBoardColumn>
  );
};
export default BoardCol;
