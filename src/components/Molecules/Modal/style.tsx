import styled, { keyframes } from "styled-components";
import { borderRadius } from "../../../styles/styleGuide";

const breatheAnimation = keyframes`
    from {
        transform:scale(0)
    }
    to { 
        transform:scale(1)
    }
`;
export const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:rgba(0,0,0,.45);
    overflow: auto;
`;

export const ModalContent = styled.div<{width?: string}>`
    margin: 10% auto;
    width: ${props => props.width ? props.width : '40%'};
    background-color: #fff;
    padding: 10px;
    border-radius: ${borderRadius};
    animation: ${breatheAnimation} 0.4s ease;
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;

    & svg {
        cursor: pointer;
    }
`;

export const ModalBody = styled.div`
    margin-top: 20px;
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: end;
`;

