
import StyledList from './style';
import { listProps } from './type';
import Link from '../Link';
import { colors } from '../../../styles/styleGuide';

const InlineList: React.FC<listProps> = ({items}) => {
    return (
        <StyledList>
            {items.map((item) => 
                <li><Link href={item.href} color={colors.gray}>{item.value}</Link></li>
            )}
        </StyledList>
    )
}

export default InlineList;