import styled from "styled-components";
import { colors } from "../../../styles/styleGuide";

type widthT = {
    width: string,
    justifyTop?: number | null
}

export const StyledSelect = styled.div<widthT>`
    position: relative;
    width: ${props => props.width};

    & button {
        background-color: #f5f5f5;
    }
`;

export const OptionBody = styled.div<widthT>`
    position: absolute;
    top: ${props => props.justifyTop ? props.justifyTop + 3 : 0 }px;
    width: ${props => props.width};
    background-color: ${colors.white};
    border: 1px solid rgb(0, 0, 0, 0.15);
    border-radius: 6px;

    & ul {
        list-style: none;
    }
`;

export const Li = styled.li<{isSelected: boolean}>`
    padding: 5px 10px;
    background-color: ${props => props.isSelected ? colors.primary : ''};
    color: ${props => props.isSelected ? colors.white : colors.black };
    cursor: pointer;
    :hover {
        background-color: ${props => props.isSelected ? 'none' : colors.lightGray };;
    }
`;