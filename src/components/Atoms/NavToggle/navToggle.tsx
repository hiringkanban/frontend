import React from "react";
import styled from "styled-components";

interface NabType {
    onClick: () => void,
    open: boolean
}

const StyledToggle = styled.div<{ onClick: React.MouseEventHandler<HTMLDivElement> }>`
    display: block;
    cursor: pointer;

    @media (min-width: 768px) {
        display: none;
    }
`;

const Humburger = styled.div<{open: boolean}>`
    content: '';
    display: block;
    width: 1.8em;
    height: 2px;
    background-color: #494c58;
    transition: all ease-in-out 250ms;
    ${props => props.open ? 'transform: rotate(45deg);' : null}

    &::before, ::after {
        content: '';
        display: block;
        width: 1.8em;
        height: 2px;
        background-color: #494c58;
        transition: all ease-in-out 250ms;
    }

    &::before {
        transform: translateY(-9px);
        ${props => props.open ? 'display: none;' : 'display: block;'}
    }

    &::after {
        transform: ${props => props.open ? 'rotate(-90deg);' : 'translateY(7px);'};
    }
`;

const NavToggle:React.FC<NabType> = ({ onClick, open }) => {
    return <StyledToggle onClick={onClick}> 
        <Humburger open={open} />
    </StyledToggle>
}

export default NavToggle;
