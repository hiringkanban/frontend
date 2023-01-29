import StyledSeperator from './style';
import { SeperatorProps } from './type';

const Seperator: React.FC<SeperatorProps> = ({ width, height = 0.5 }) => {
  return <StyledSeperator width={width} height={height} />;
};

export default Seperator;
