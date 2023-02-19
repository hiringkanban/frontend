import { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Row from '../../Atoms/Row';
import AdminTemplate from '../../Templates/Admin';
import BoardCol from '../../Molecules/BoardCol';
import initialData from './data';

const breadcrumbs = [
  { id: 1, value: 'Admin', href: '#' },
  { id: 2, value: 'Condidats', href: '#' },
];

const Condidats = () => {
  const [data, setData] = useState(initialData);

  const ondragEnd = (result: DropResult) => {
    const { draggableId, source, destination } = result;

    if (!destination) return;
    const fromColumn = data.columns[source.droppableId];
    const toColumn = data.columns[destination.droppableId];
    const newStartItems = Array.from(fromColumn.items);
    const newEndItems = Array.from(toColumn.items);
    let isLocalSwap = false;

    const doSwapItem = (localSwap: boolean) => {
      newStartItems.splice(source.index, 1);
      if (localSwap) {
        newStartItems.splice(destination.index, 0, draggableId);
        return;
      }
      newEndItems.splice(destination.index, 0, draggableId);
    };

    if (source.droppableId === destination.droppableId) {
      isLocalSwap = true;
      doSwapItem(isLocalSwap);

      const newColumn = {
        ...fromColumn,
        items: newStartItems,
      };

      setData({
        ...data,
        columns: {
          ...data.columns,
          [source.droppableId]: newColumn,
        },
      });

      return;
    }

    doSwapItem(isLocalSwap);
    const newStartColumn = {
      ...fromColumn,
      items: newStartItems,
    };

    const newEndColumn = {
      ...toColumn,
      items: newEndItems,
    };

    setData({
      ...data,
      columns: {
        ...data.columns,
        [source.droppableId]: newStartColumn,
        [destination.droppableId]: newEndColumn,
      },
    });
  };

  return (
    <AdminTemplate breadcrumbs={breadcrumbs}>
      <DragDropContext onDragEnd={ondragEnd}>
        <Row gap={15}>
          {Object.keys(data.columns).map((column) => {
            const columnIitems = data.columns[column].items.map((item) => data.items[item]);
            return (
              <BoardCol
                key={column}
                id={column}
                column={data.columns[column]}
                items={columnIitems}
              />
            );
          })}
        </Row>
      </DragDropContext>
    </AdminTemplate>
  );
};

export default Condidats;
