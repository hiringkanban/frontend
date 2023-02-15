import { Droppable } from 'react-beautiful-dnd';
import Box from '../../Atoms/Box';
import BoardItem from '../BoardItem';
import StyledBoardColumn from './style';

interface BoardColProps {
  column: { title: string; items: string[] };
  items: {id: string, name: string}[];
  id: string;
}

const BoardCol: React.FC<BoardColProps> = ({ column, id, items }) => {
  console.log(items);
  return (
    <StyledBoardColumn>
      <h4>{column.title}</h4>
      <Droppable droppableId={id}>
        {(provided) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {items.map((item, index) => <BoardItem key={item.id} item={item} index={index} /> )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </StyledBoardColumn>
  );
};
export default BoardCol;
