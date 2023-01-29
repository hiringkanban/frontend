import StyledBadge from './style';
import { BadgeProps } from './type';

const Badge: React.FC<BadgeProps> = ({ bg = 'info', children }) => (
  <StyledBadge bg={bg}> {children} </StyledBadge>
);

export default Badge;
