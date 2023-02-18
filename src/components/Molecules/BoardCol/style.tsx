import styled from 'styled-components';
import { borderRadius, colors } from '../../../styles/styleGuide';

export const StyledBoardColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  background-color: #eee;
  border-radius: ${borderRadius};

  & h3 {
    padding: 20px;
    color: ${colors.gray};
  }
`;

export const BoardColumnBody = styled.div<{ isDraggingOver: boolean; isScroll: boolean }>`
  padding: 20px;
  border: ${(props) => (props.isDraggingOver ? `2px dashed ${colors.primary}` : 'none')};
  max-height: 70vh;
  min-height: 10vh;
  overflow-y: ${(props) => (props.isScroll ? 'scroll' : 'none')};
`;
