import styled from 'styled-components';
import { borderRadius } from '../../../styles/styleGuide';

const StyledBoardColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 22%;
  padding: 20px;
  background-color: #696cff29;
  opacity: 0.5;
  border-radius: ${borderRadius};
`;

export default StyledBoardColumn;
