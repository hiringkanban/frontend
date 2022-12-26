import styled from "styled-components";
import { status } from '../../../styles/styleGuide';
import { inputProps } from "./type";

interface InputStyleProps extends Omit<inputProps, 'onChange'> {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const StyledInput = styled.input<InputStyleProps>`
    width: 100%;
    height: 3em;
    padding: 0.5em;
    border: 2px solid ${props=> props.status ? status[props.status] : status['default'] };
    border-radius: 6px;
    :focus {
        outline: none;
        opacity: 0.8;
    }
`;

export default StyledInput;