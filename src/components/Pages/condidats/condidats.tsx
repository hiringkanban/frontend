import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Row from '../../Atoms/Row';
import AdminTemplate from '../../Templates/Admin';
import BoardCol from '../../Molecules/BoardCol';

const breadcrumbs = [
  { value: 'Admin', href: '#' },
  { value: 'Condidats', href: '#' },
];

const BoardCols = [
  { id: 'col-01', name: 'All' },
  { id: 'col-02', name: 'Accepted' },
  { id: 'col-03', name: 'Tech interview 01' },
  { id: 'col-04', name: 'interview 02' },
];

const BoardsItems = [
  { id: '1', title: 'bilal dif', col: 'col-01' },
  { id: '2', title: 'Sif Beladel', col: 'col-01' },
  { id: '3', title: 'Lackder', col: 'col-01' },
  { id: '4', title: 'Ameir', col: 'col-01' },
];

const Condidats = () => {
  const [items, setIems] = useState(BoardsItems);

  const ondragEnd = (result: any) => {
    console.log(result);
    const { source, destination, draggableId } = result;
    const newItems = Array.from(items);
    if (source.droppableId === destination.droppableId) {
      newItems.splice(destination.index, 0, newItems.splice(source.index, 1)[0]);
      setIems(newItems);
      return;
    }

    newItems[source.index].col = destination.droppableId;
    setIems(newItems);
  };
  console.log(items);

  return (
    <AdminTemplate breadcrumbs={breadcrumbs}>
      <DragDropContext onDragEnd={ondragEnd}>
        <Row gap={15}>
          {BoardCols.map((board) => (
            <BoardCol key={board.id} column={board} items={items} />
          ))}
        </Row>
      </DragDropContext>
    </AdminTemplate>
  );
};

export default Condidats;
