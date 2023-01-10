import StyledRow from "./style";
import { rowProps } from "./type";

const Row:React.FC<rowProps> = ({children, gap}) => {
    return (
        <StyledRow gap={gap}>
            {children}
        </StyledRow>
    )
}

export default Row;