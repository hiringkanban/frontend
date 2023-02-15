import styled from 'styled-components';
import { borderRadius } from '../../../styles/styleGuide';

const StyledBoardColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 20px;
  background-color: #fff;
  border-radius: ${borderRadius};
`;

export default StyledBoardColumn;
