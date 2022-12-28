import StyledSeperator from "./style"
import { seperatorProps } from "./type"

const Seperator:React.FC<seperatorProps> = ({width, height = 0.5}) => {
    return <StyledSeperator
        width={width}
        height={height}
    />
}

export default Seperator;