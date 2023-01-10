import StyledRow from "./style";
import { rowProps } from "./type";

const Row:React.FC<rowProps> = (props) => {

    const {
        children,
        margin,
        gap
    } = props;

    return (
        <StyledRow 
            gap={gap}
            margin={margin}
        >
            {children}
        </StyledRow>
    )
}

export default Row;