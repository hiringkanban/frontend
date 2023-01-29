import StyledCol from './style';
import { ColProps } from './type';

const Col: React.FC<ColProps> = (props) => {
  const { children, span, offset } = props;

  return (
    <StyledCol span={span} offset={offset}>
      {children}
    </StyledCol>
  );
};

export default Col;
