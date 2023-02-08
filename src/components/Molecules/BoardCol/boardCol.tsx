import { useDrop } from 'react-dnd';

type ItemT = {
  id: number;
  title: string;
  col: string;
};

interface BoardColProps {
  children: React.ReactNode;
  title: string;
  onDrop: (item: ItemT, title: string) => void;
}
const BoardCol: React.FC<BoardColProps> = ({ children, title, onDrop }) => {
  const [, drop] = useDrop({
    accept: 'Item',
    drop: (item: ItemT) => {
      onDrop(item, title);
    },
  });

  return (
    <div ref={drop}>
      <h4>{title}</h4>
      {children}
    </div>
  );
};
export default BoardCol;
