import React, { useRef, useEffect, useState } from "react";
import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";
import { selectProps, valueT } from "./type";
import { 
    StyledSelect,
    OptionBody,
    Li
} from "./style";
import Portal from "../../Atoms/Portal/portal";

const Select:React.FC<selectProps> = (props) => {

    const { 
        options,
        width,
        selectedValue,
        leftIcon,
        rightIcon,
        handleChange,
    } = props;

    const [show, setShow] = useState(false);
    const [bodyCoordinates, setBodyCoordinates] = useState({x : 0, y : 0, height: 0});
    const selectRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = (value: valueT) => {
        handleChange(value);
        setShow(false);
    }

    const onClickoutside = (event:Event) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Element)) {
            setShow(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', onClickoutside);

        return () => document.addEventListener('click', onClickoutside);
    }, [selectRef]);

    const handleButtonClick = () => {
        setShow(!show);
        if (buttonRef.current) {
            const coords = buttonRef.current.getBoundingClientRect();
            setBodyCoordinates({x: coords.x, y: coords.y, height: coords.height })
        }
    }

    return (
        <>
            <StyledSelect width={width} ref={selectRef}>
                <Button 
                    width={width}
                    variant="default"
                    onClick={handleButtonClick}
                    noborder
                    leftIcon={leftIcon}
                    rightIcon={rightIcon}
                    ref={buttonRef}
                >
                    <Text>{selectedValue}</Text>
                </Button>
                { show && 
                <Portal>
                    <OptionBody 
                        width={width}
                        justifyTop={buttonRef.current && buttonRef.current.offsetHeight}
                        coords={bodyCoordinates}
                    >
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
                </Portal>
                }
            </StyledSelect>
        </>
    )
}

export default Select;