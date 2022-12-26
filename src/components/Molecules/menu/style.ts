import React from 'react';
import styled from 'styled-components';
import { textColors } from '../../../styles/styleGuide';


const StyledMenu = styled.ul<{ lastChild?: string}>`
    display: flex;
    align-items: center;
    list-style: none;

    & li {
        margin-left: 2em;

        @media (max-width: 768px) {
            display: flex;
            justify-content: center;
            padding: 1em;
            border-bottom: 1px solid #f1e6e6;
            text-align: center;
            width: 80%;
            margin-left: 0;

            &:last-child {
                ${props => props.lastChild}
            }
        }

        & a {
            font-size: 1rem;
            font-weight: 300;
            text-decoration: none;
            color: ${textColors.secondary_text_color};          
        }
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export default StyledMenu;