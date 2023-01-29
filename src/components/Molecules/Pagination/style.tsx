import styled from 'styled-components';
import { borderRadius, colors, fontWeight } from '../../../styles/styleGuide';

export const StyledPagination = styled.ul`
  display: flex;
  list-style: none;
`;

export const StyledPaginationLink = styled.li<{ active?: boolean }>`
  background-color: ${(props) => (props.active ? colors.primary : '#f5f5f5')};
  margin-left: 3px;
  padding: 5px;
  border-radius: ${borderRadius};
  cursor: pointer;
  :hover {
    background-color: #e1e4e8;
  }

  a {
    padding: 0.625rem;
    color: ${(props) => (props.active ? '#fff' : colors.gray)};
    text-align: center;
    line-height: 1;
    font-weight: ${fontWeight.bold};
  }
`;
