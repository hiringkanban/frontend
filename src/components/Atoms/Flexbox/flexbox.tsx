import React from "react";
import StyledFlexBox from "./style";
import flexProps from "./type";

const FlexBox:React.FC<flexProps> = (props) => {

    const {
        direction = 'row',
        children,
        justify,
        alignItem,
        alignContent,
        flexWrap,
        flexFlow,
        gap,
        height
    } = props;
    
    return (
        <StyledFlexBox
            direction={direction}
            justify={justify}
            alignItem={alignItem}
            alignContent={alignContent}
            flexWrap={flexWrap}
            flexFlow={flexFlow}
            gap={gap}
            height={height}
        >
            {children} 
        </StyledFlexBox>
    )
}

export default FlexBox;