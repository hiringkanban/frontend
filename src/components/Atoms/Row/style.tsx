import styled from 'styled-components';

const StyledRow = styled.div<{ gap?: number; margin?: string }>`
  display: flex;
  flex-wrap: nowrap;
  gap: ${(props) => props.gap}px;
  margin: ${(props) => props.margin};
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export default StyledRow;
