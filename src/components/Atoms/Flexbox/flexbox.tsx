import React from 'react';
import StyledFlexBox from './style';
import FlexProps from './type';

const FlexBox: React.FC<FlexProps> = (props) => {
  const {
    direction = 'row',
    children,
    justify,
    alignItem,
    alignContent,
    flexWrap,
    flexFlow,
    gap,
    height,
    margin,
    padding,
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
      margin={margin}
      padding={padding}
    >
      {children}
    </StyledFlexBox>
  );
};

export default FlexBox;
