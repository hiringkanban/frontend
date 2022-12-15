import styled from "styled-components";
import buttonProps from "./type";

const getStyle = (props: any): any => {
    return props.variant;
}

const StyledButton = styled.button<buttonProps>`
    background: ${() => getStyle(props: any => props.variant)}
    padding: 0.6em 1.5em;
    border-radius: 0.5em;
`;

export default StyledButton;
