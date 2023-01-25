
import StyledList from './style';
import { listProps } from './type';
import Link from '../../Atoms/Link';
import { colors } from '../../../styles/styleGuide';

const InlineList: React.FC<listProps> = ({items, breadcrumbs, fontSize}) => {
    return (
        <StyledList 
            breadcrumbs={breadcrumbs}
            fontSize={fontSize}
        >
            {items.map((item, index) => 
                <li>
                    <Link href={item.href} color={colors.gray}>
                        {item.value}
                    </Link>
                    {(breadcrumbs && index !== items.length - 1 )&& 
                    <span>/</span>
                    }
                </li>
            )}
        </StyledList>
    )
}

export default InlineList;