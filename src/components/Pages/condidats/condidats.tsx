import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Row from '../../Atoms/Row';
import AdminTemplate from '../../Templates/Admin';
import BoardCol from '../../Molecules/BoardCol';
import { initialData } from './data';

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
  const [data, setData] = useState(initialData);

  const ondragEnd = (result: any) => {
   
  };

  return (
    <AdminTemplate breadcrumbs={breadcrumbs}>
      <DragDropContext onDragEnd={ondragEnd}>
        <Row gap={15}>
          {Object.keys(data.columns).map((column) => {
            const columnIitems = data.columns[column].items.map((item) => data.items[item]);
            return <BoardCol key={column} id={column} column={data.columns[column]} items={columnIitems} />
          })}
        </Row>
      </DragDropContext>
    </AdminTemplate>
  );
};

export default Condidats;
