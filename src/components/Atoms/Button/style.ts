import styled from "styled-components";
import buttonProps from "./type";
import { 
    buttonVariant,
    buttonSize,
    borderRadius,
    colors
} from '../../../styles/styleGuide';


const StyledButton = styled.button<buttonProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${props => props.width};
    padding:${props => props.size !== undefined ? buttonSize[props.size]: ''};
    color: ${props => props.variant === 'default' ? colors.black: '#fff'};
    font-size: 0.875rem;
    font-weight: 300;
    border-radius: ${borderRadius};
    ${props => props.variant !== undefined ? buttonVariant[props.variant] : ''};
    border: ${props => props.noborder ? 'none' : ''};
    cursor: pointer;

    :hover {
        opacity: 0.9;
    }
`;

export default StyledButton;
