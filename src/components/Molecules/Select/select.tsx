import { useEffect, useState } from "react";
import Text from "../../Atoms/Paragraph/Paragraph";
import Button from "../../Atoms/Button";
import { selectProps } from "./type";
import { 
    StyledSelect,
    OptionBody,
    Li
} from "./style";

type optionT = string | number;

const Select:React.FC<selectProps> = (props) => {

    const { 
        options,
        width,
        selectedValue,
        handleChange,
    } = props;

    const [show, setShow] = useState(false);

    const handleClick = (value: optionT) => {
        handleChange(value);
        setShow(false);
    }

    useEffect(() => {
        
    }, []);

    return (
        <>
            <StyledSelect width={width}>
                <Button 
                    width={width}
                    variant="default"
                    onClick={() => setShow(!show)}
                    noborder
                >
                    <Text>{selectedValue}</Text>
                </Button>
                { show && 
                <OptionBody width={width}>
                    <ul>
                        {options.map(({label, value}) => 
                            <Li 
                                isSelected={selectedValue === value}
                                onClick={() => handleClick(value)}
                            >
                                {label}
                            </Li>
                        )}
                    </ul>
                </OptionBody>
                }
            </StyledSelect>
        </>
    )
}

export default Select;