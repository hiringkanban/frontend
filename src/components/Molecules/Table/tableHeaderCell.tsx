import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import FlexBox from '../../Atoms/Flexbox/flexbox';
import Drodown from '../Drodown';
import { StyledTableHeaderCell } from './style';
import { TableHeadCellProps, DataSourceT } from './type';

const TableHeaderCell: React.FC<TableHeadCellProps> = ({ column, data, sortData }) => {
  const [sort, setSort] = useState('');

  const doSort = (datas: DataSourceT[]) => {
    const newData = [...datas];
    if (sort === '') {
      setSort('up');
      newData.sort((a, b) => column.sorter?.(a, b) as number);
      sortData([...newData]);
    } else if (sort === 'up') {
      setSort('down');
      newData.sort((a, b) => column.sorter?.(b, a) as number);
      sortData([...newData]);
    } else if (sort === 'down') {
      setSort('');
      sortData([...data]);
    }
  };

  const actions = [
    { id: 1, name: 'Profile', onClick: () => {} },
    { id: 1, name: 'Settings', onClick: () => {} },
  ];
  const issorted = column.sorter ? (
    // eslint-disable-next-line react/button-has-type
    <FlexBox direction="column">
      <FontAwesomeIcon icon={['fas', 'caret-up']} style={sort === 'up' ? { color: 'red' } : {}} />
      <FontAwesomeIcon
        icon={['fas', 'caret-down']}
        style={sort === 'down' ? { color: 'red' } : {}}
      />
    </FlexBox>
  ) : (
    ''
  );

  const isFilter = column.filters ? <Drodown menuItems={actions} name="filter" /> : '';

  return (
    <StyledTableHeaderCell onClick={() => doSort(data)} isSortable={column.sorter !== undefined}>
      <FlexBox justify="space-between" alignItem="center">
        {column.title}
        {issorted}
        {isFilter}
      </FlexBox>
    </StyledTableHeaderCell>
  );
};

export default TableHeaderCell;
