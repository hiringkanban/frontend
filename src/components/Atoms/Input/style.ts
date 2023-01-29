import styled from 'styled-components';
import { colors, status } from '../../../styles/styleGuide';
import { InputProps } from './type';

interface InputStyleProps extends Omit<InputProps, 'onChange'> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input<InputStyleProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: 2.8em;
  padding: 0.5em;
  border: 1px solid ${(props) => (props.status ? status[props.status] : colors.lightGray)};
  border-radius: 6px;
  transition: 0.5s;
  outline: none;
  :focus {
    border: 1px solid ${status.primary};
  }
`;

export default StyledInput;
