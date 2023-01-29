import StyledRow from './style';
import { RowProps } from './type';

const Row: React.FC<RowProps> = (props) => {
  const { children, margin, gap } = props;

  return (
    <StyledRow gap={gap} margin={margin}>
      {children}
    </StyledRow>
  );
};

export default Row;
