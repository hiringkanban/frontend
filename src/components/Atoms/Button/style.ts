import styled from "styled-components";
import buttonProps from "./type";
import { 
    buttonVariant,
    buttonSize,
    borderRadius
} from '../../../styles/styleGuide';


const StyledButton = styled.button<buttonProps>`
    background: ${props => props.variant !== undefined ? buttonVariant[props.variant] : ''};
    padding:${props => props.size !== undefined ? buttonSize[props.size]: ''};
    color: #fff;
    font-size: 1rem;
    border-radius: ${borderRadius};
    border: 1px solid ${props => props.variant !== undefined ? buttonVariant[props.variant] : ''};
    cursor: pointer;
`;

export default StyledButton;
