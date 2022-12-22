import React from 'react';
import styled from 'styled-components';
import { textColors } from '../../../styles/styleGuide';


const StyledMenu = styled.ul<{ open?: boolean }>`
    display: flex;
    align-items: center;
    list-style: none;


    & li {
        margin-left: 2em;
        @media (max-width: 768px) {
            display: ${props => props.open ? 'block' : 'none'};
            width: 100%;
            margin-left: 0em;
            text-align: center;
            padding: 1em 0;
        }

        & a {
            font-size: 1rem;
            font-weight: 300;
            text-decoration: none;
            color: ${textColors.secondary_text_color};
        }
    }

    @media (max-width: 768px) {
        display: block;
    }
`;

export default StyledMenu;