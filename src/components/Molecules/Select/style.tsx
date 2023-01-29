import styled from 'styled-components';
import { colors } from '../../../styles/styleGuide';

type OptionBodyT = {
  width: string;
  justifyTop?: number | null;
  coords: { x: number; y: number; height: number };
};

export const StyledSelect = styled.div<{ width: string }>`
  position: relative;
  width: ${(props) => props.width};

  & button {
    background-color: #fff;
  }
`;

export const OptionBody = styled.div<OptionBodyT>`
  position: absolute;
  top: ${(props) => props.coords.y + props.coords.height + 3}px;
  left: ${(props) => props?.coords?.x}px;
  width: ${(props) => props.width};
  background-color: ${colors.white};
  border: 1px solid rgb(0, 0, 0, 0.15);
  border-radius: 6px;

  & ul {
    list-style: none;
  }
`;

export const Li = styled.li<{ isSelected: boolean }>`
  padding: 5px 10px;
  background-color: ${(props) => (props.isSelected ? colors.primary : '')};
  color: ${(props) => (props.isSelected ? colors.white : colors.black)};
  cursor: pointer;
  :hover {
    background-color: ${(props) => (props.isSelected ? 'none' : colors.lightGray)};
  }
`;
