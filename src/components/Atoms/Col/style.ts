import styled from 'styled-components';
import { ColT } from './type';

const StyledCol = styled.div<{ span: ColT; offset?: ColT }>`
  flex: ${(props) => (props.span * 100) / 12}%;
  margin-inline-start: ${(props) => (props.offset !== undefined ? (props.offset * 100) / 12 : 0)}%;
  @media (max-width: 768px) {
    width: 100%;
    margin-inline-start: 0;
  }
`;

export default StyledCol;
