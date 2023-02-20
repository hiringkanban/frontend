import StyledAlert from './style';
import { AlertT } from './type';

const Alert: React.FC<AlertT> = ({ message, type = 'primary' }) => {
  return (
    <StyledAlert type={type}>
      <span>{message}</span>
    </StyledAlert>
  );
};

export default Alert;
