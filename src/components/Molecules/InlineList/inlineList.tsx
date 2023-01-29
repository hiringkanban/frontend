import StyledList from './style';
import { ListProps } from './type';
import Link from '../../Atoms/Link';
import { colors } from '../../../styles/styleGuide';

const InlineList: React.FC<ListProps> = ({ items, breadcrumbs, fontSize }) => {
  return (
    <StyledList breadcrumbs={breadcrumbs} fontSize={fontSize}>
      {items.map((item, index) => (
        <li key={item.id}>
          <Link href={item.href} color={colors.gray}>
            {item.value}
          </Link>
          {breadcrumbs && index !== items.length - 1 && <span>/</span>}
        </li>
      ))}
    </StyledList>
  );
};

export default InlineList;
