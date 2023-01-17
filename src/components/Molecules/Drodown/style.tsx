import styled from "styled-components";
import { borderRadius } from "../../../styles/styleGuide";

type OptionBodyT = {
    justifyTop?: number | null
    coords: { x: number, y: number, height: number }
}

export const DropdownOptions = styled.div<OptionBodyT>`
    position: absolute;
    top: ${props => props?.coords?.y + props?.coords?.height + 10}px;
    left: ${props => props?.coords?.x}px;
    display: flex;
    flex-direction: column;
    width: 200px;
    padding: 5px;
    box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%);
    background-color: #fff;
    border-radius: ${borderRadius};
    ::before {
        content: '';
        border-left: 15px solid transparent;
	    border-right: 15px solid transparent;
	    border-bottom: 15px solid #fff;
        position: absolute;
        top: -14px;
    }

    & ul {
        list-style: none;
        li {
            padding: 5px 12px;
            cursor: pointer;
            svg {
                margin-right: 6px;
            }
            :hover {
                background-color:rgba(0,0,0,.04);;
            }
        }
    }
`;
