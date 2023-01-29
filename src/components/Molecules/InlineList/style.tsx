import styled from 'styled-components';
import { colors } from '../../../styles/styleGuide';

const StyledList = styled.ul<{ breadcrumbs?: boolean; fontSize?: string }>`
  list-style: none;
  display: flex;
  align-items: center;

  & li {
    margin-left: ${(props) => (props.breadcrumbs ? 0 : '10px')};
    font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
    a {
      display: inline-flex;
    }
    span {
      margin: 10px;
      color: ${colors.gray};
    }
    svg {
      font-size: 20px;
    }

    :last-child {
      ${(props) => (props.breadcrumbs ? 'font-weight:bold' : '')};
    }
  }
`;

export default StyledList;
