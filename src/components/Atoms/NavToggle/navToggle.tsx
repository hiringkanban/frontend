import React from "react";
import styled from "styled-components";

interface NabType {
    onClick: () => void
}

const StyledToggle = styled.div<{ onClick: React.MouseEventHandler<HTMLDivElement> }>`
   /* position: absolute;
    top: 18px;
    right: 15px;*/
    display: block;
    cursor: pointer;

    @media (min-width: 768px) {
        display: none;
    }
`;

const Humburger = styled.div`
    content: '';
    display: block;
    width: 1.8em;
    height: 2px;
    margin-top: 3px;
    background-color: #000;
    transition: all ease-in-out 250ms;

    &::before, ::after {
        content: '';
        display: block;
        width: 1.8em;
        height: 2px;
        background-color: #333333;
        transition: all ease-in-out 250ms;
    }

    &::before {
        transform: translateY(-10px);
    }

    &::after {
        transform: translateY(8px);
    }
`;

const NavToggle:React.FC<NabType> = ({ onClick }) => {
    return <StyledToggle onClick={onClick}> 
        <Humburger />
    </StyledToggle>
}

export default NavToggle;
