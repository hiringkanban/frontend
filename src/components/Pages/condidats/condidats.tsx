import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useState } from 'react';
import Box from '../../Atoms/Box';
import Col from '../../Atoms/Col';
import Row from '../../Atoms/Row';
import AdminTemplate from '../../Templates/Admin';
import BoardCol from '../../Molecules/BoardCol';
import BoardItem from '../../Molecules/BoardItem';

const breadcrumbs = [
  { value: 'Admin', href: '#' },
  { value: 'Condidats', href: '#' },
];

const BoardCols = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Accepted' },
  { id: 3, name: 'Tech interview 01' },
  { id: 3, name: 'interview 02' },
];

const BoardsItems = [
  { id: 1, title: 'bilal dif', col: 'All' },
  { id: 2, title: 'Sif Beladel', col: 'All' },
  { id: 3, title: 'Lackder', col: 'All' },
  { id: 4, title: 'Ameir', col: 'All' },
];

type ItemT = {
  id: number;
  title: string;
  col: string;
};

const Condidats = () => {
  const [items, setIems] = useState(BoardsItems);

  const onDrop = (item: ItemT, title: string) => {
    setIems((prevState) => {
      const newItems = prevState.filter((i) => i.id !== item.id).concat({ ...item, col: title });
      return [...newItems];
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <AdminTemplate breadcrumbs={breadcrumbs}>
        <Row gap={15}>
          {BoardCols.map((board) => (
            <Col key={board.id} span={3}>
              <Box>
                <BoardCol title={board.name} onDrop={onDrop}>
                  {items
                    .filter((item) => item.col === board.name)
                    .map((item) => (
                      <Box key={item.id} margin="10px 0">
                        <BoardItem title={item.title} item={item} />
                      </Box>
                    ))}
                </BoardCol>
              </Box>
            </Col>
          ))}
        </Row>
      </AdminTemplate>
    </DndProvider>
  );
};

export default Condidats;
