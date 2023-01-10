import StyledCol from "./style"
import { colProps } from "./type"

const Col:React.FC<colProps> = (props) => {
    const {
        children,
        span,
        offset
    } = props;

    return (
        <StyledCol span={span} offset={offset}>
            {children}
        </StyledCol>
    )
}

export default Col;