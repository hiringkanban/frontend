import styled from 'styled-components';
import { borderRadius } from '../../../styles/styleGuide';

type OptionBodyT = {
  justifyTop?: number | null;
  coords: { x: number; y: number; height: number; width: number };
  window: number;
};

const DropdownOptions = styled.div<OptionBodyT>`
  position: absolute;
  top: ${(props) => props.coords.y + props.coords.height + 10}px;
  ${(props) =>
    props.coords.x + 150 > props.window
      ? `right:${props.window - (props.coords.x + props.coords.width)}px;`
      : `left: ${props?.coords?.x}px;`}
  display: flex;
  flex-direction: column;
  width: 150px;
  padding: 5px;
  box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%);
  background-color: #fff;
  border-radius: ${borderRadius};
  ::before {
    content: '';
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #fff;
    position: absolute;
    top: -12px;
    ${(props) => (props.coords.x + 150 > props.window ? `right: 0;` : `left: 0;`)}
  }

  & ul {
    list-style: none;
    li {
      padding: 5px 12px;
      cursor: pointer;
      svg {
        margin-right: 6px;
      }
      :hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
  }
`;

export default DropdownOptions;
