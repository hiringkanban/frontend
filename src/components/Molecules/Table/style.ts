import styled from 'styled-components';
import { fontWeight } from '../../../styles/styleGuide';

export const TableWraper = styled.div`
  overflow-x: 'auto';
`;

export const TableHeader = styled.div`
  padding: 15px;
  background-color: #fff;
`;

export const TableFooter = styled.div`
  padding: 15px;
  background-color: #fff;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
  overflow-x: auto;
`;

export const TableCell = styled.td`
  height: 40px;
  padding: 15px;
  font-size: 14px;
  font-weight: ${fontWeight.light};
  border-top: 1px solid #eee;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }

  & span {
    @media (max-width: 768px) {
      padding: 0px;
    }
  }
`;

export const TableRowItem = styled.tr`
  :hover {
    background-color: #f5f5f5;
  }
`;

export const TableHead = styled.thead``;

export const StyledTableHeaderCell = styled.th<{ isSortable: boolean }>`
  padding: 15px;
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 768px) {
    padding: 5px;
    font-size: 14px;
  }
  ${(props) => (props.isSortable ? 'cursor: pointer' : '')};
`;

export const TableBody = styled.tbody``;
